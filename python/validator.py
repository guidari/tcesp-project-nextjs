from bs4 import BeautifulSoup
import requests
import sys

# print(sys.argv[1])

html = sys.argv[1]
#html = 'https://santoandre.obaratec.com.br/apex/stoandre/f?p=839:5:0::NO:5:INSTITUICAO,P5_MES_INICIAL,P5_MES_FINAL,P5_TIPO_DESPESA,P5_COLUNAS,P5_TIPO_RELATORIO,P5_PARAMETRO:1,1,1,O,O;A,1,1'

headers = {
    'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36"}

# print("URL Teste: "+html+"\n")

site = requests.get(html, headers=headers)

soup = BeautifulSoup(site.content, 'html.parser')

soupString = str(soup).lower()
exports = ""
validator = {
    "exportar",
    "export",
    "csv",
    "excel",
    "pdf",
    "xls",
    "json",
    "imprimir",
    "baixar"
}

for i in validator:

    test = soupString.find(i)
    if test != -1:
        exports = exports + str(i) + ", "

print(exports)
