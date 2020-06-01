---
title: "A bried cors introduction"
date: "2020-05-19"
image: "https://images.pexels.com/photos/2058271/pexels-photo-2058271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=800"
---

**CORS** is the acronyms to **Cross-Origin Resource Sharing**. This is used to share resources like JSON, images, CSS across different domains in a safe way. CORS takes advantage from HTTP header to access the controller layer, to block or allow requests made between different domains.

This control is generally made by using the domain, HTTP method, and custom headers to identify which request is allowed across different domains and which is not.

By default when you make a request, for example using the `fetch API` or `XMLHttpRequest`, the browser will just allow the request to be made for the current domain, where your application was loaded. In other words, if you are on `www.mydomain.com` you can just make a request to `www.mydomian.com` if you need to make a request for a different domain like `www.otherdomain.com` the CORS should be set.

## How does it work?

In this example I will use a fetch API to exemplify the CORS use:

In this first step, let's consider that the site was loaded on `www.mydomain.com` and that we are trying to make a request to` www.otherdoiman.com` to get a public image and show it on the website.

```js
const image = await fetch(www.otherdomain.com/public-image.png);
```

After executing the request we can get a header as shown below.

```
:authority: www.otherdomain.com
:method: GET  
:path: /public-image.png
:scheme: https
accept: */*
origin: www.mydomain.com
...
```
Take a look at the **origin** field; this is responsible to inform the server what is making the request.

After the request is processed you can get a response with a header like:

```
accept-ranges: bytes
access-control-allow-origin: www.mydomain.com
cache-control: public, max-age=31536000
...
```

Take a look this time on the field **access-control-allow-origin** this head informs our browser that `www.mydomain.com` have permission to make this request, so it works. Sometimes when we have a public service the wildcards `*` symbol can be returned instead of the domain, it indicates that any domain is allowed.

```
access-control-allow-origin: *
```

### Preflighted request

In some cases the request can cause *side effects* in other words, it may imply changes on the user data, so in order to ensure that this data will not change by malicious request, the browser can make a preflighted request using the method `OPTIONS` to get information about CORS permissions and in case you are not allowed, you will receive an error.

When this kinda scenario happens, you should specify in your request which HTTP method you are using, which your domain is, and add which custom headers you are using, and in case the service that you requested is allowed, you can get a successful response.

There is a list of heads that may be used to allow or not a request, some are used on the request (client) and others on the response (server).

I will show a list of the most useful CORS headers and their meaning.

|Request Headers               | description                      |
|------------------------------|----------------------------------|
|Origin                        | domain where the request was made| 
|Access-Control-Request-Method | HTTP method used in the request  |
|Access-Control-Request-Headers| Custom heads that are you using  |

|Request Headers                  | description                                     |
|---------------------------------|-------------------------------------------------|
|Access-Control-Allow-Origin      | Origin allowed by the service                   | 
|Access-Control-Allow-Credentials | Determine if the credentials were accepted      |
|Access-Control-Expose-Headers    | Headers that can be accessed by the browser     |
|Access-Control-Max-Age           | Cache time for CORS headers in OPTIONS response |
|Access-Control-Allow-Methods     | HTTP methods allowed by the server              |
|Access-Control-Allow-Headers     | Custom Headers allowed by the server            |

## Conclusion

CORS is a security layer that is added to ensure that the request made by a domain is allowed or not to our services, it gives us safety that all requests we are receiving in our service comes from the domain we want and the way we want.

It prevents some people to try to modify or get information from unknown domain without our permission.

I hope that this article increases your curiosity about the topic. I will give some references in case you want to go deeper on it.

## References

- [Cross origin resource sharing - wikpedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [Resource Sharing (CORS) - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Cross Origin Resource Sharing (Explained by Example)](https://www.youtube.com/watch?v=Ka8vG5miErk)
