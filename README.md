# DogFair

<center>by <a href="https://github.com/Seiyial">Seiyial</a></center>

Welcome to the Dog Fair! It is an annual fair* for dogs in Arcadia Valley*.

We've just been informed that the DogSociety of Arcadia Valley is setting up a booth at the DogFair, for owners to register DogSociety Licenses for their dogs! DogSociety* is a really great club out there for our furry pals, and this is the first time they're opening such a registration in Arcadia Valley! There will be tons and tons of people registering. For that, I need your help to set up a registration console for our friendly booth managers.

They will need to be able to **Create**, **Read**, **Update** and **Delete** these registrations.

The API endpoints for those have already been set up by me. All you have to do is build what the users see.

Create a **Single-Page Application (SPA)**  (frontend only) using **ReactJS** that provides these features.



You _should_:

- 👍🏻 USE only Functional Components (NO Class Components)
- 🙅🏻‍♂️ NOT USE VueJS, Svelte or other frontend frameworks
- ☑️ Validate all user inputs on **frontend** side (aka ensure they're filled in and in valid format) and not rely on the server alone to perform validations.
- 🦄 Let the user know what went wrong, if anything went wrong with their actions, even if it's an issue with the server.
- ✋🏻 Let us know if there are any issues with the API.
- 🙂 Make sure to attribute those who need to be attributed.
- 😮 If multiple errors are returned by the API or your validation methods at the same time, you should display them all at the same time.
- 😊 Structure your code and this codebase in a consistent manner and be able to explain how you structured it.
- 👍🏻 `$ open README.html` after cloning this repository as it'll help you view this better

You're *highly recommended to*:

- 👍🏻 Use a highly supported code editor like VSCode
- 👍🏻 USE a npm library like `axios` to make asynchronous HTTP requests to the API (provided below)
- 👍🏻 Install `ESLint` on your code editor and have it guide you to write frontend code our way (our eslint ruleset has already been loaded into this folder)

You *may wanna...*

- 👍🏻 Learn to use a react routing framework like `reach-router` (we/I use this), `react-router` or [build your own](https://www.freecodecamp.org/news/you-might-not-need-react-router-38673620f3d/)
- 😆 Use TypeScript if you can! (But be warned, especially if you're new, this will increase the difficulty by A LOT)
- Redux is not necessary but you're welcome to try it too (not recommended for now)

## How to run the server

```bash
# clone the repository
git clone git@github.com:Seiyial/dogfair_frontend dogfair

# enter folder
cd dogfair

# install dependencies
npm install # or yarn

# start server
npm start # or yarn start
```

## API

> Note: as the `dogfair` API is hosted on Heroku as a free tier app, it will go to sleep after some moments of inactivity. Thus, if you haven't hit the API for a while, give it up to 30 seconds to get back to you.

### API for CREATING License Registration

**POST `https://dogfair.herokuapp.com/api/license_registrations`**

Required format:

```json
{
  "registration": {
    "name": (string),
    "age": (integer),
    "description": (string),
    "doggo_id": (string) (unique) (see below)
  }
}
```

The `doggo_id` follows the following [RegExp](https://blog.usejournal.com/regular-expressions-a-complete-beginners-tutorial-c7327b9fd8eb) format:

```js
/(J)(\d{6})([a-d])/g
```

This means that the `doggo_id`:-

- Starts with the capital letter **J**
- Followed by any **six (6)** digits
- and ends with any lowercase letter from **a** to **d**.

Examples of valid `doggo_id`s:

J123456a, J449320c, J090909d

Examples of invalid `doggo_id`s:

X325533a, JACKSONVILLE, j123456a, J123456A.



#### Successful Response

>The following is my _guarantee_: when these conditions (in bold) are met (in this case, the response status code is `201`), what you wanted to do (in this case, create a license registration) **is** successful. **Otherwise, it is not.** Different backends may implement different means of conveying successful response.

**Status code: 201**

Response body:

```json
{
  "data": (information about the dog you registered)
}
```



#### Unsuccessful Response

 >The section "successful response" above shows what distinguishes between a successful and unsuccessful response. This section will cover what are the different **cases** of unsuccessful responses and what they mean, so that you can feedback that to the user accordingly.

```json
// Basic Structure:
{
  "errors": {
    (erratic field you provided): [
    	(list of errors)
  	]
	}
}

// COMMON ERRORS

// doggo_id has already been registered
{
  "errors": {
    "doggo_id": ["has already been taken"]
  }
}

// name is blank or not provided
{
  "errors": {
    "name": ["can't be blank"]
  }
}

// doggo_id is incorrectly formatted
{
  "errors": {
    "doggo_id": ["has invalid format"]
  }
}

// NOTE: Multiple Errors, if there are, can and will be returned together. You are expected to display them on your UI altogether.
// e.g.
{
  "errors": {
    "name": ["can't be blank"],
    "description": ["can't be blank"],
    "doggo_id": ["has invalid format"]
  }
}
```



### API for LISTING License Registrations

**GET `https://dogfair.herokuapp.com/api/license_registrations`**

> A **GET** request, unlike a **POST** request above, does not accept a request body. Thus, there is no JSON to send here.

#### Successful Response

**Status code: 200**

Response body:

```json
{
	"data": [
    (information about a dog registration),
    (information about another dog registration)
  ]
}
```

### Information about a dog registration

Each dog registration will be represented in this format. Parse the data accordingly to display registration details in your app.

```json
{
  "age": (number),
  "description": (string),
  "doggo_id": {
    "first": "J",
    "last": (last 3 numbers of doggo_id, and the letter, e.g. "456d")
  },
	"id": (ID in the database) (number),
	"name": (string)
}
```

As you can see, the `doggo_id` isn't fully returned. This is done on purpose as we don't want to expose it completely here. You should display the Doggo ID to the user in the form of J...123d (based on the values you provided)

### API for UPDATING License Registrations

**PATCH** or **PUT**  [https://dogfair.herokuapp.com/api/license_registrations/{id}]() where {id} is the the `id` of the registration.

E.g. to update the registration of ID 2, send a **PUT** or **PATCH** request to https://dogfair.herokuapp.com/api/license_registrations/2.

**Required Request Body**:

```json
{
  "registration": {
    "name": (string),
    "age": (integer),
    "description": (string),
    "doggo_id": (string) (unique) // see create section for formatting of this variable)
  }
}
```

##### Unsuccessful Responses

```json
// Basic Structure:
{
  "errors": {
    // (erratic field you provided): [
    	// (list of errors)
  	// ]
	}
}

// COMMON ERRORS

// doggo_id has already been registered
{
  "errors": {
    "doggo_id": ["has already been taken"]
  }
}

// name is blank or not provided
{
  "errors": {
    "name": ["can't be blank"]
  }
}

// doggo_id is incorrectly formatted
{
  "errors": {
    "doggo_id": ["has invalid format"]
  }
}

// There is no record at the specified ID, it could've been deleted already
{
  "detail": "Not found"
}

// NOTE: Multiple Errors, if there are, can and will be returned together. You are expected to display them on your UI altogether.
// e.g.
{
  "errors": {
    "name": ["can't be blank"],
    "description": ["can't be blank"],
    "doggo_id": ["has invalid format"]
  }
}
```



### API for DELETING License Registrations

**DELETE**  [https://dogfair.herokuapp.com/api/license_registrations/{id}]() where {id} is the the `id` of the registration.

E.g. to update the registration of ID 2, send a **PUT** or **PATCH** request to https://dogfair.herokuapp.com/api/license_registrations/2.

##### Successful Response

**Status Code: 204** (no content)



##### Unsuccessful Responses

- Status Code: 404 (Not Found)

  Body: `{ "detail": "Not found" }`

  > The requested ID is not found. The registration may have been already deleted _prior_ to this request.





_*Of course, all fictional 🌠_

