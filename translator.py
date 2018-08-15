import urllib.request, urllib.parse, urllib.error
from urllib.parse import quote

filePath = input("Enter file path: ")
tempFile = open(filePath)
outputfile = open(tempFile.name+"_hindi.srt","w");
lines = tempFile.readlines()

for line in lines:
    url = 'http://127.0.0.1:3002/abc/'+urllib.parse.quote(line)
    content = urllib.request.urlopen(url).read().decode()
    outputfile.write(content)
    outputfile.write("\n")
  
