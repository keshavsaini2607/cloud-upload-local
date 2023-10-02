
# Cloud Upload Local

This is an nestjs server side application which is demonstrating some of the aws cloud bucket (s3) functionalities


## Tech Stack Used
- NestJs (Backend framework)
- MongoDB (Database)
- Multer (File upload)
- Express (For Interceptor functionalities)


## API Reference

#### Create a new bucket

```http
  POST /buckets/create
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of the bucket |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `description` | `string` | **Optional**. Description |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `type` | `image, document, other` | **Required**. Type of data to be stored in bucket|

#### List all buckets

```http
  GET /buckets/list
```

#### Delete bucket

```http
  DELETE /buckets/delete
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bucketId` | `string` | **Required**. Id of the bucket to be deleted |


#### Update bucket

```http
  POST /buckets/update
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `{'name', 'type', 'description'}` | **Required**. Details to update |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bucketId` | `string` | **Required**. Bucket Id |

#### Save new file

```http
  POST /file/save
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bucket` | `string` | **Required**. Id of bucket in which the file is going to be stored |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of the file |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `file` | `buffer/file` | **Required**. The original file |

#### All files in a bucket
Returns all files within a selected bucket

```http
  POST /file/from-bucket
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bucketId` | `string` | **Required**. Id of bucket from which files will be shown |

#### Delete File

```http
  POST /file/delete
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `fileId` | `string` | **Required**. Id of file to be deleted |

#### Update a file

```http
  POST /file/update
```



| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `{'name', 'bucket'}` | **Required**. Name of the file if want to update and bucket id if want to move file to another bucket|

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `fileId` | `string` | **Required**. Id of the file |


## Run Locally

Clone the project

```bash
  git clone https://github.com/keshavsaini2607/cloud-upload-local.git
```

Go to the project directory

```bash
  cd cloud-upload-local
```

Install dependencies

```bash
  npm install or yarn
```

Start the server

```bash
  npm run start:dev or yarn start:dev
```


