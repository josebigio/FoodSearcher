from app import app
from flask import render_template, request
import requests
import json

@app.route('/',methods=['GET', 'POST'])
@app.route('/index',methods=['GET', 'POST'])
def index():
	foodQuery = ""
	result=[]
	keys=[]
	angularInitString = ""
	if request.method == 'POST':
		keys = ["item_name","brand_name","nf_calories","nf_serving_size_qty","nf_serving_size_unit","nf_protein","nf_total_carbohydrate","nf_total_fat"]
		foodQuery = request.form['foodQuery']
		payload = {
			"appId":"599541d9",
			"appKey":"59f7e33f14303a9c5dfc51d99fd2dc94",
			"query":foodQuery,
			"fields":keys,
			"sort":{ "field":"_score","order":"desc"},
			"limit":50,
			"filters":{"item_type":2}
		}
		headers = {"Content-Type":"application/json"}
		r = requests.post("https://api.nutritionix.com/v1_1/search",data=json.dumps(payload),headers=headers)
		print (r.status_code)
		jsonResponse = r.json()
		hits = jsonResponse['hits']
		for hit in hits:
			result.append(hit["fields"])

	return render_template('index.html',foodQuery=foodQuery,result=result,keys=keys)


	
