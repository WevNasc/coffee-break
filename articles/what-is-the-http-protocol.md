---
title: "What is the HTTP protocol?"
date: "2020-06-01"
image: "https://images.pexels.com/photos/6618/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1000"
---

This is one of the most famous protocol, almost the whole web runs over it, basically all web sites you access today use the HTTP like google, gmail or facebook. But before I start talking about http we need to know what a protocol is.

### What is a protocol?

A protocol is like a language, a mean of communication, the computer uses many kinds of protocol to communicate with each other, for example HTTP, FTP and etc ... Generally, these protocols have information about which computer is communicating and what message it would like to transmit, but they work in different ways for different purposes.

## HTTP 

The HTTP does your communication one by one generally in a client-server architecture, where there is a client like a browser or a mobile device, and a server that will serve the web content. In order to the cliente commuinicate with the server, they need to use a mean of communication, for example HTTP.

This communication happens across requests (the request from the client to the server) and responses (the response sent from the server to the client).

## The request anatomy

|Request                       |
|------------------------------|
|URL                           | 
|Method Type                   |
|Headers                       |
|Body                          |

### URL

The URL is the place where the message will be sent, basically it is the machine that will consume the message. The URL contains some essential information like the `domain`, the `path`, and the `query`.

An example of URL is `www.mydomain/path?query=some`

### Method Type

The method type is used to identify the intention or the action, for example: to get information from the server I could do a `GET`, if I want to send some information to the server I could do a `POST`. There are other kinds of methods that may be used for different scenarios, like `PUT`, `DELETE`, and `OPTIONS`.

### Headers
This is used to transmit information about the request for the server, for example: authentication tokens, type of content sent, host from the cliente and so on. 

If you would like to know which kind of headers you can send, I really recommend the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

### Body

The body is the message that you would like to send for the server, it can be any kind of web content like a JSON, text, or even an image.

## The response anatomy

|Response                      |
|------------------------------|
|Headers                       | 
|Body                          |
|Status Code                   |

### Body and Headers
They Follow same structure as request's body and headers, but this time the server responds with them for the client.

### Status Code
The status code is a code to give a summary about what happened with the server during the request, the more common ones are 200(OK), 404(Not found), and 500(Server Error).

 - Information (100..199)
 - Success (200..299)
 - Redirects (300..399)
 - An error cause by the client (400..499)
 - An error cause by the Server (500..599)

Each range of status means something more generic, and each status gives a more specific idea about what is going on.