## ArabKu: An Object Recognition App for Students Learning Arabic

### Bangkit Capstone Project 2023
Bangkit Capstone Team ID : C23-PS278 <br>
Here is our repository for Bangkit 2022 Capstone project - Cloud Computing

### Cloud Architecture 

### API Description
This is the source code for the ArabKu team's API. This API is built using Node.js and the Express framework. We utilize Axios for fetching data from third-party APIs. The API is deployed on App Engine.<br>
### API URL
[ArabKu API URL](https://backend2-dot-arabku.et.r.appspot.com/)<br>
[API Fatimah Bot URL](https://api.myquran.com/v1/sholat)
|  Endpoint |  Method	     |      Query Params |           Description          |
| :----: | :------------: | :-----------------: | :------------------------: |
| /sholat/kota/cari/{keyword} | GET   | City Name      | HTTP GET REQUEST City Code based on City Name  |
| /sholat/kota/semua | GET | | HTTP GET REQUEST All City Name and City Code |
| | | | |
| | | | |


#### ArabKu Endpoint Documentation
[ArabKu Endpoint Documentation](https://documenter.getpostman.com/view/27960839/2s93sgXWUc)
#### myQuran.com API
[myQuran.com API Documentation](https://documenter.getpostman.com/view/841292/Tz5p7yHS#ae4b237c-e97c-4353-9e94-67d155af06f8)

### How to use the endpoint
* To use this endpoint that our team provided
* After getting the token then Open a Postman Application and fill the params
* Select method GET then Send the request
* If success then postman will return the data
