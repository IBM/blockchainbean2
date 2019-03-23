## Bonus Step - Deploy your local app to the Cloud
If you want to keep your application running all the time, 
you'll want to deploy it to the cloud. The goal is to deploy
something like this: http://blockchainbeans2.mybluemix.net/


<br>
<p align="center">
  <img src="doc-gifs/cfTarget.gif">
</p>
<br>

1. In your `blockchainbean2` directory, open the `manifest.yml` file. Change
the app name to whatever you wish. I called mine testApp123667.
2. Next, use the `cf login` command to login to IBM Cloud.
(I use `cf login --sso` since I have a IBMid).
3. Once you are logged in, pick your org and space where you want to deploy
you app. Your org and space will be different than mine.
<br>
<p align="center">
  <img src="doc-gifs/deploy.gif">
</p>
<br>
4. Lastly, use `cf push` to push your newly named app to the IBM Cloud. Once 
that app is deployed, go ahead and open the URL, and submit a /POST/Grower 
transaction.
If everything went well, you should have a app running in the Cloud, with 
all transactions logged on the IBM Blockchain Platform. Congrats!