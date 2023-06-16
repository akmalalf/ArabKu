## ArabKu: An Object Recognition App for Students Learning Arabic

### Bangkit Capstone Project 2023
Bangkit Capstone Team ID : C23-PS278 <br>
Here is our repository for Bangkit 2022 Capstone project - Cloud Computing

### Cloud Architecture 
![Cloud Architecture](https://github.com/akmalalf/ArabKu/blob/cloud/Asset/Screenshot%202023-06-16%20113731.png)<br>
### API Description
This is the source code for the ArabKu team's API. This API is built using Node.js and the Express framework. We utilize Axios for fetching data from third-party APIs. The API is deployed on App Engine.<br>
### API URL
[ArabKu API URL](https://backend2-dot-arabku.et.r.appspot.com/)<br>
[API Fatimah Bot URL](https://api.banghasan.com/)
|  Endpoint |  Method	     |      Query Params |           Description          |
| :----: | :------------: | :-----------------: | :------------------------: |
| /sholat/format/json/kota/nama/{keyword} | GET   | City Name      | HTTP GET REQUEST City Code based on City Name  |
| /sholat/format/json/kota | GET | | HTTP GET REQUEST All City Name and City Code |
| /sholat/format/json/jadwal/kota/{Keyword}/tanggal/{Keyword} | GET | City Code, Date| HTTP GET REQUEST Prayer Time based on Citi Code and Date |


#### ArabKu Endpoint Documentation
[ArabKu Endpoint Documentation](https://documenter.getpostman.com/view/27960839/2s93sgXWUc)
#### myQuran.com API
[myQuran.com API Documentation](https://fathimah.docs.apiary.io/#reference/sholat)

### How to use the endpoint
* To use this endpoint that our team provided
* After getting the token then Open a Postman Application and fill the params
* Select method GET then Send the request
* If success then postman will return the data
