from bs4 import BeautifulSoup
import requests
import sys

print(sys.argv[1])

URL = {
    "https://santoandre.obaratec.com.br/apex/stoandre/f?p=839:5:0::NO:5:INSTITUICAO,P5_MES_INICIAL,P5_MES_FINAL,P5_TIPO_DESPESA,P5_COLUNAS,P5_TIPO_RELATORIO,P5_PARAMETRO:1,1,1,O,O;A,1,1",
    "http://www.portaltransparencia.gov.br/convenios/consulta?de=01%2F01%2F2021&ate=31%2F12%2F2021&municipio=20172&ordenarPor=orgao&direcao=desc"

}

headers = {
    'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36"}


for html in URL:
    print("URL Teste:   "+html+"\n")

    site = requests.get(html, headers=headers)

    soup = BeautifulSoup(site.content, 'html.parser')

    soupString = str(soup).lower()

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
            print("      "+str(i)+" - OK")
        else:
            print(str(i)+" - Não tem")

    print("\n")
