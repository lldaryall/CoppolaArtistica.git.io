```javascript
export default async function handler(req, res) {
  const term = req.query.term || '';
  const APPID = process.env.EBAY_APP_ID;
  const url = `https://svcs.ebay.com/services/search/FindingService/v1`
    + `?OPERATION-NAME=findItemsByKeywords`
    + `&SERVICE-VERSION=1.0.0`
    + `&SECURITY-APPNAME=${APPID}`
    + `&RESPONSE-DATA-FORMAT=JSON`
    + `&paginationInput.entriesPerPage=24`
    + `&sortOrder=StartTimeNewest`
    + `&keywords=${encodeURIComponent(term)}`;

  const r = await fetch(url);
  const j = await r.json();
  const raw = j.findItemsByKeywordsResponse[0].searchResult[0].item || [];
  const items = raw.map(i => ({
    itemId: i.itemId[0],
    title: i.title[0],
    galleryURL: i.galleryURL[0],
    viewItemURL: i.viewItemURL[0],
    sellingStatus: { currentPrice: i.sellingStatus[0].currentPrice[0] },
    isNew: new Date(i.listingInfo[0].startTime[0]) > Date.now() - 24*3600*1000
  }));
  res.status(200).json(items);
}
```
