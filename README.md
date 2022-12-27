# Megaverse 🪐☄️

This is an assignment that consumes a third party API.


# Description

The assignment is composed of 2 phases. In the first one you will interact with the API and create some 🪐 POLYanets and validate them. In the second one you will create a bigger megaverse with some peculiar shape.

1. Phase 1 - creates an X shape based on a for loop
2. Phase 2
   - Read the goal map
   - Parse the goal map and determine which entitie will be created
   - Call the Third party API to create this entities with some extra delay to avoid time outs and overloading the server.

## Running the app

First, install the dependencies:

```bash
npm i
```
Then, start the dev server:

```bash
npm start
```

The app will be available at port ``4000``

### Endpoints 

An express server starts on port 4000, and the endpoints are:

1. `/api/polyanets/createX` - this will create the X needed for phase 1
2. `/api/polyanets/reset` - this will clear the 11x11 base needed for phase 1
3. `/api/map/create` - this will create the map neeeded for Phase 2.

## Possible Optimizations:

In the interests of brevity I wrote this quickly, but several optimizations can and should be made were this to be created as a production system.

1. Using Typescript
2. Optimize error management with more error classes
3. Testing suites
4. Results from each call can be queued
5. A polling thread can check on the status of the calls