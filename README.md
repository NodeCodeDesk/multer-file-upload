# multer-file-upload
Simple way to upload file with multer (Node Js)

- Use express and multer
- Create storage object
- "destination" is used to provide the path where you want to be stored uploaded file.
- "filename" for provides file name to uploaded file.
-   If you not passed file name it will use random name without extension.
-   
- If you want to upload only single file use
-   .single('keyName') 
- And If you want to upload multiple file for e.g:- 2, then just simply use
-   .array('keyName',2)

And just make request to upload file with Postman for given route with "keyName" and file
For e.g:- http://localhost:3000/single
  
and pass keyName in body and select "file" option from dropdown and then choose file and hit request.


