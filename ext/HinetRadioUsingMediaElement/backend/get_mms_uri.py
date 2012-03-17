import re
import urllib2

HINET_RADIO_LIST = 'http://hichannel.hinet.net/xml/radioList.jsp'
SILVER_LIGHT_URL_PREFIX = 'http://hichannel.hinet.net/player/radio/silverlight.jsp?radio_id='

def get_mms_uri(id):
    silverlightUrl = '%s%s' % (SILVER_LIGHT_URL_PREFIX, id, )

    obj = urllib2.urlopen(silverlightUrl)
    html = obj.read()

    pattern = 'var radioStream = "([^"]+)";'
    regex = re.search(pattern, html)
    if regex:
        return regex.group(1)
    return ''

def generate_mms_list(output):
    out = open(output, 'wb')

    obj = urllib2.urlopen(HINET_RADIO_LIST)
    xml = obj.read()

    pattern = ' id="([0-9]+)" myTitle="([^"]+)"'
    list = re.findall(pattern, xml)

    items = []
    for item in list:
        id, title = item

        uri = get_mms_uri(id)

        string = '\t{id: "%s", title: "%s", uri: "%s"}' % (id, title, uri, )
        items.append(string)

        print('id: %s, mms uri is %s' % (id, uri))

    jsonString = '[\n%s\n]' % (',\n'.join(items), )

    out.write(jsonString)
    out.close()

if __name__ == '__main__':
    generate_mms_list('hinet_radio_list.json')
    
