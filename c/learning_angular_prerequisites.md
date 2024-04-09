---
slug: 'learning-angular-prerequisites'
date: '2017-11-11'
title: 'Learning Angular Prerequisites'
template: 'post'
tags:
  ['front end', 'spa', 'Angular', 'DOM', 'component based architecture', 'OOP']

description: 'Learning Angular Prerequisites'
thumbnail: './images/black_angular.png'
topic: 'Learning Angular Prerequisites'
---

# Learning Angular Prerequisites

A lot of developers start learning Angular straight away without getting to know basic fundamentals that is important to be an efficient and knowledgeable Angular developer.

People tend to learn by different ways. Some prefer diving directly into the subject matter (in this case Angular) and then learn the fundamentals along the way. Others prefer to learn the fundamentals before getting involved with the subject matter. The majority of developers including me prefer holding a middle ground between the two teams.

In all cases at least “knowing what fundamental topics you should know” is greatly beneficial. This article could would act as a map for Angular prerequisites. The 4 main fundamental aspects that would foster your process of learning Angular are the following:

1. Front end development

1. Single Page Applications

1. Component based architecture

1. Object oriented programming

![](./images/black_angular.png)

## New to Front-End Development and JavaScript?

A lot if developers mix between JavaScript as a language and the DOM (Document object model) which is linked to the HTML. This is due to the fact that JavaScript was only used to develop web pages and were not widely used as it is nowadays in desktop applications, backend, robotics, etc. This attachment has been established also due to the fact that JavaScript is almost the only programming language that works with the DOM.

### Understand JavaScript

Abundant JavaScript learning sources are available online. Examples incorporate but are not limited to courses, books, articles, and MDN JavaScript docs. Focus on concepts that makes like closures, high order functions, ES6 features, asynchronous code using callbacks and promises, implicit type conversion, and events.

### Understand the DOM API

> The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.

The DOM consists of nodes, event targets, and elements coupled to the html document. The link below shows the DOM interfaces. You could click on any of the interfaces to learn about its usage in details. Do not get overwhelmed by the details and use that link only as a reference.
[**Document Object Model (DOM)**
*The Document Object Model (DOM) connects web pages to scripts or programming languages. Usually that means JavaScript…*developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

Usually JavaScript courses delineate interaction with the DOM API, which allows you to learn a lot about the DOM api but it is important to keep in my mind the divergence between JavaScript as a language and the DOM api.

The good news is that frameworks and libraries such as React and Angular abstracts away DOM interaction, so DOM manual manipulation would rarely be used by you.

## Single Page applications (SPAs)

It is important to understand the following about SPAs

1. What is a single page application?

1. Why using a library or framework is recommended in building SPAs?

1. The pros and cons of using SPAs in contrast to the usage of regular web pages in terms of UX, performance, security, and page load times

## Component Based Architecture

Few years ago MVC and its sister MVVM were the default architectures to hit the ground running with large web apps. Currently the two most widely used front end frameworks and libraries (React and Angular) settled on using the component based architecture and acknowledged it as the optimal approach to build single page applications. Therefore, a solid understanding of the concept is significant in proceeding with learning Angular.

A component is simply a piece of JavaScript (or Typescript) code that is accompanied by html. [Dan Shapiro](undefined) explains in the article below component based architecture in much more detail.
[**Understanding Component-Based Architecture**
*When Facebook released React.js in 2013 it redefined the way in which Front End Developers could build user interfaces…*medium.com](https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238)

## Object Oriented Programming

### Classes

Almost everything in Angular is a class. Services, components, decorators, etc are classes. An understanding of what classes are is rudimentary in learning angular. Providentially, learning ES6 features would encompass learning classes in JavaScript which is not totally different than classes in Typescript (Angular’s default language).

### Inheritance

Class inheritance should not be regularly used for code reuse in your app but you would probably see class inheritance in Angular’s internal modules which would benefit your understanding of the framework.

### Composition

It is recommended to have an understanding of composition in object oriented programming to know how angular utilizes injectable services to leverage composition for abstraction and code reuse across components

### Dependency Injection

I would suggest a brief understanding of dependency injection and why is it beneficial in

1. Decreasing code coupling

1. Granting more testable code

### Decorators

Decorators are used in object oriented programming to add extra functionalities to already existing classes without changing the original classes’ code. You do need to dive deep in the decorator pattern but just ensure that you acquire the basics so that when you are exposed to code like the below you won’t get shocked or interpret it as some sort of magic.

    @Component

The decorator pattern is used by Angular’s modules in several instances that incorporates “Component”, “Input”, and “Directive” classes

Evidently, this article do not cover any of the topics profoundly. In fact, the topics are almost mentioned and barely covered. Therefore, I would encourage you to utilize online sources to have a at least a basic understanding of each of the mentioned topics while learning Angular, if not before.
