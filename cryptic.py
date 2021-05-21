from bs4 import BeautifulSoup
import csv
import json
import requests
import requests_cache

requests_cache.install_cache('cryptic_cache')

# data = open("watch?v=NYyqI2L8bPQ").read()
# path = "watch.html"

import zipfile
with zipfile.ZipFile("CTC Catalogue downloadable.zip") as zf:
    data = zf.open("Data.html").read()

def extract_details(data, rules_required=True):
    _, blob = data.split("var ytInitialPlayerResponse = ", 1)
    # _, blob = data.split("var ytInitialData = ", 1)
    blob, _ = blob.split(";</script>", 1)

    # blob = json.loads(blob)
    
        # "videoId": "NYyqI2L8bPQ",
        # "title": "How Can This Sudoku Have No Digits At All?",
        # "lengthSeconds": "2854",
        # "channelId": "UCC-UOdK8-mIjxBQm_ot1T-Q",
        # "isOwnerViewing": false,
        # "shortDescription

    # print(blob)

    rules = None
    app_url = None

    j = json.loads(blob)
    details = j["videoDetails"]
    for block in details["shortDescription"].split("\n\n"):
        if "rules" in block.lower():
            rules = block.strip()
        elif "app.crackingthecryptic.com" in block:
            app_url = [part for part in block.split() if "app.crackingthecryptic.com" in part][0]
    if rules_required and not rules:
        raise ValueError("NO RULES FOUND IN {}".format(details["shortDescription"]))

    return {"rules": rules, "app_url": app_url, "length": int(details["lengthSeconds"])}

soup = BeautifulSoup(data, features="lxml")
table = soup.find_all('table')[0] # Grab the first table

# head = table.find_all('thead')[0]
# for row in table.find_all('tr')[:1]:

# head = table.find_all('tr')[1]
# columns = [column.get_text().strip() for column in head.find_all('td')[1:]]
# print(columns)
# print("---")

puzzle_count = 0
rows = reversed(table.find_all('tr'))
while puzzle_count < 20:
    row = next(rows)

    columns = row.find_all('td')[1:]
    if not columns:
        continue

    video_title = columns[0].get_text()
    if video_title:
        video_title = video_title.strip()
    if not video_title:
        continue

    video_type = columns[3].get_text()
    if video_type:
        video_type = video_type.strip()
    if video_type.lower() != "sudoku":
        continue

    nature = columns[4].get_text().strip()
    
    # 'Video Title', '', 'Link', 'Video Type', 'Nature', 'Constraints', 'Date', 'Collection', 'Host/Solver', 'Setter', 'Source'

    url = columns[2].a["href"]
    discord = None
    if columns[-4].a:
        discord = columns[-4].a["href"]

    columns = [column.get_text().strip() for column in columns]

    columns[0] = video_title
    columns[2] = url
    columns[-4] = discord

    # ['Video Title', '', 'Link', 'Video Type', 'Nature', 'Constraints', 'Date', 'Collection', 'Host/Solver', 'Setter', 'Source']
    video_title, _, link, video_type, nature, constraints, date, collection, solver, setter, source = [c.strip() if c else c for c in columns]
    constraints = [c.strip() for c in constraints.split(";")]

    video = dict(video_title=video_title,
                 link=link,
                 video_type=video_type,
                 nature=nature,
                 constraints=constraints,
                 date=date,
                 collection=collection,
                 solver=solver,
                 setter=setter,
                 source=source)

    response = requests.get(url)
    details = extract_details(response.text,
                              rules_required=nature.lower() not in ("classic",))
    video.update(details)
    print(json.dumps(video))

    puzzle_count += 1

    # print(url)

    # for column in columns:
    #     # new_table.iat[row_marker,column_marker] = 
    #     print(column.get_text())
        # column_marker += 1
    # print("---")


# print(details["video_title"])
# print(url)
# print(rules)

# search = open("search.html").read()
# data = open(path).read()
# _, blob = data.split("var ytInitialData = ", 1)
# blob, _ = blob.split(";</script>", 1)
# print(blob)

# soup = BeautifulSoup(open("watch?v=NYyqI2L8bPQ"), features="lxml")

# for tag in soup.find_all("meta", attrs={"name":"video_title"}):
#     title = tag["content"]



# final_link = soup.p.a
# final_link.decompose()

# f = csv.writer(open("43rd_Congress.csv", "w"))
 #f.writerow(["Name", "Link"])    # Write column headers as the first line

# links = soup.find_all('a')
# for link in links:
#     names = link.contents[0]
#     fullLink = link.get('href')

#     f.writerow([names,fullLink])
