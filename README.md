# Running the scraper

## Installing dependencies
```
npm install -g serverless
npm install
```
## Running locally
```
sls invoke local -f scrape
```

## Running in production
```
sls deploy
sls invoke -f scrape
```