# Instructor Service API 

|Action|Description|Verb|Endpoint|Params|Payload|Response Status|
|------|-----------|----|----------|-------|--------|---|
|[Register an instructor](#register-an-instructor)| Add instructor data to database| `POST` | `/instructors`||instructor| `200 OK` <br />`500 SERVER ERROR`<br /> `400 BAD REQUEST`|
|[Get an instructor](#get-an-instructor)| Get an instructor| `GET` | `/instructors/:id`|id|| `200 OK` <br />`404 NOT FOUND`|


## Register an instructor
`POST /instructors` <br /> 

### Request:
- payload 
    - `instructor`
        ```JSON
        {
            "first_name": "Christine",
            "last_name": "Swinerd",
            "password": "iAu4fgD3",
            "email": "email@email.com",
            "phone": "+1 (565) 886-5959",
            "gender": "Male",
            "street": "2 Pearson Pass",
            "city": "Vancouver",
            "province" : "British Columbia",
            "country": "Canada",
            "company": "Lang-Sauer",
            "language": "English",
            "experience": 40,
            "license": "Class 5"
        }
        ```
### Responses:
- `200 OK`
    ```JSON
    {
        "data": {
            "first_name": "Christine",
            "last_name": "Swinerd",
            "password": "iAu4fgD3",
            "email": "email@email.com",
            "phone": "+1 (565) 886-5959",
            "gender": "Male",
            "photo": "https://picsum.photos/200",
            "rating": 0,
            "street": "2 Pearson Pass",
            "city": "Vancouver",
            "province": "British Columbia",
            "country": "Canada",
            "company": "Lang-Sauer",
            "language": "English",
            "experience": 40,
            "license": "Class 5",
            "description": "No descirption for this instructor",
            "isCarProvided": false,
            "_id": "62c72e56f14bf7af7e1d09ec",
            "__v": 0
        }
    }
    ```
 
- `400 BAD REQUEST`
    ```JSON
    {
        "error": {
            "errors": {
                "province": {
                    "name": "ValidatorError",
                    "message": "Path `province` is required.",
                    "properties": {
                        "message": "Path `province` is required.",
                        "type": "required",
                        "path": "province"
                    },
                    "kind": "required",
                    "path": "province"
                }
            },
            "_message": "Instructor validation failed",
            "name": "ValidationError",
            "message": "Instructor validation failed: province: Path `province` is required."
        }
    }
    ```

- `500 SERVER ERROR`
    ```JSON
    {
        "error": {
            // internal error messages
        }
    }
    ```


## Get an instructor
`GET /instructors/:id`

### Request:
- params
    - `id` instructor id

```
/instructors/62c73339a444d4087f56a093
```

### Responses:
- `200 OK`
    ```JSON
    {
        "data": {
            "_id": "62c73339a444d4087f56a093",
            "first_name": "Christine",
            "last_name": "Swinerd",
            "password": "iAu4fgD3",
            "email": "email@email.com",
            "phone": "+1 (565) 886-5959",
            "gender": "Male",
            "photo": "https://picsum.photos/200",
            "rating": 0,
            "street": "2 Pearson Pass",
            "city": "Vancouver",
            "province": "British Columbia",
            "country": "Canada",
            "company": "Lang-Sauer",
            "language": "English",
            "experience": 40,
            "license": "Class 5",
            "description": "No descirption for this instructor",
            "isCarProvided": false,
            "__v": 0
        }
    }
    ```

- `404 NOT FOUND`
    ```JSON
    {
        "error": {
            "message": "cannot find instructor with id 62c73339a444d4087f56a0asdfa"
        }
    }
    ```