---
slug: "paper_review_javascript_the_uncovered_parts"
date: "2019-01-30"
title: "Paper Review: Javascript the Uncovered Parts"
template: "post"
tags: ["paper review", "javscript", "testing", "DOM"]

description: 'This is a paper review for: Fard, Amin Milani, and Ali Mesbah. "JavaScript: The (un) covered parts." In Software Testing,
Verification and Validation (ICST), 2017 IEEE International Conference on, pp. 230-240. IEEE, 2017.'
topic: "Paper Review: Javascript the Uncovered Parts"
---

## Summary

The purpose of this study is to know how prevalent is testing in JavaScript, the quality of these tests,
and what areas are harder to test and why.

To answer these questions, the authors developed a static analysis tool called TESTSCANNER that
parses code into an AST and performs several analyses on it. These include calculating the average
number of assertions per test case and finding local coverage percentage of hard-to-test code. The
authors used this tool to analyse 373 JavaScript projects that included both client-side and server-
side projects. Afterward, the authors analysed the areas of poor code coverage and identified
reasons that make these areas especially hard to test.

The results showed that 22% of projects did not include any tests. These projects were mainly client-
side. On the other hand, almost all server-side projects had tests, and most tests were written using
a testing framework. The popularity and maturity of the project were found to be directly
proportional to the number of tests. Testing quality metrics such as code coverage, test code ratio,
test commit ratio, and average assertions per test were used to evaluate the quality of tests in the
projects. As expected, server-side projects were found to have better testing quality metrics. Also,
projects that used a testing framework had higher coverage than projects that did not. Only a small
percentage of client-side projects were found to have end-to-end tests. DOM-related code,
asynchronous functions, and event dependent call-backs were found to be harder to test than other
areas.

## Pros

- The authors presented a logical flow of the argument. The data and the conclusion do not
  contradict each other. The authors clearly defined the problem statement, the methodology,
  results, and conclusion. The paper, in general, was organized and easy to comprehend and
  follow. Definitions were provided with details and with illustrative examples. For example,
  the authors provided a code example to explain what an asynchronous callback is.
- The development of TESTSCANNER is innovative and does not have any other open source
  alternative to the best of my knowledge. The authors were generous to provide the tool as
  an open source tool. They were generous too in making the paper publicly available on
  SALT’s lab website.
- The authors did provide an excellent example for others to follow by not shying out from
  referencing popular non-peer reviewed publications.
- Previous papers theoretically described how some JavaScript areas were hard to test.
  However, this was the first empirical study to prove to what degree these areas were
  causing problems in real-world projects.

## Cons

- 373 repositories are enough to support the author’s generalizations if these generalizations
  are towards only open source projects. Closed source projects could have different metrics.
- There are more accessible and more accurate ways to get code coverage data for open
  projects. Coveralls.io and codecov.io provide tools that generate code coverage reports to
  projects subscribed to them. A lot of public projects uses these tools. Usually, these projects
  add a badge to their Github repo that links to codecov.io or coveralls.io. Scrapping their GitHub pages
  for those links is probably easier than using the “CodeCoverageCalculator” in TESTSCANNER. Please note
  that if identifying hard-to-test code is dependent on TESTSCANNER’s “CodeCoverageCalculator,"
  then this concern would not be viable.
- The paper mentioned test-code-ratio as a metric for evaluating the quality of tests without
  providing a reference for this claim.
- The paper did not provide enough details about TESTSCANNER’s implementation.
- The paper mentioned that most npm modules are server side without any reference. There
  are a lot of client-side npm modules like browserify and react.
- Splitting the last research questions (“Which part of the code is mainly uncovered by tests
  and why?") into two questions might be a good idea.
- The paper did not mention whether coverage reports were generated for UI tests and the
  methodology of generating these reports.

## Future Work and Further Research

### Advancements in Testing Techniques

**Advancements in End-to-end Tests and Image-based Tests.** Only a fraction of tests in our mined
JavaScript projects on GitHub was found to be functional end-to-end tests. End-to-end tests were
always seen as unreliable and hard to maintain. Software experts usually recommend having a
massive base of unit tests and minimal integration and e2e tests. However, throughout the last two
years, new libraries have been developed to ease the pain involved with end-to-end testing.
Nightwatch, puppeteer, cypress, and test cafe are among those libraries that are overthrowing the
old king Selenium. Some of the features that these libraries provide include improved debugging, a
visual component for easier QA (quality analysis), and the ability to record a user's interaction in the
app and auto-generate a test case based on the recorded interactions. Besides these libraries, two
papers have developed tools that automatically repairs end-to-end tests (Hori, et al. 2018). In
addition to end-to-end tests, image-snapshot-testing has gained popularity throughout the last year.
These testing frameworks use image diffs for regression testing. Open source tools like “jest-image-
snapshot” and proprietary tools like “Chromatic” are examples of image-based testing frameworks.
Although advances for UI testing frameworks are present, one could hardly find a reputable review
about these tools. We could conduct a literature survey on the advancements of testing UI and
analyse the efficacy of these tests.

**Snapshot Testing.** Maintaining tests is laborious in some projects. This fact causes many developers
to skip writing tests for hard-to-test parts like the parts we uncovered in our paper. Snapshot testing
(which is different from image-snapshot-testing) involves dumping test state into JSON objects and
validating these JSON objects against previous test results. Diffs in the dumped JSON state
represents a test error. Snapshot testing is especially useful for testing UI elements. JavaScript client-
side projects have increasingly used snapshot testing throughout the last year. It offers a fast and
reliable way to check if DOM elements are present. We could perform an empirical study on client-
side JavaScript projects that uses snapshot tests and compare their code coverage to projects that
do not use it.

**Empirical Study on Mutation Testing in JavaScript Projects**. Mutation testing helps improve test
effectiveness. JavaScript Stryker, a modern mutation testing framework for JavaScript, had gained
lots of traction throughout the last year and numerous open source projects have used this
framework. To empirically determine the test effectiveness of mutation testing, we could mine
JavaScript projects on GitHub that uses Stryker and analyse the number of tickets of bugs that occurred in projects that incorporate mutation testing and projects that do not. This study could let
us empirically prove the benefits of mutation testing in JavaScript projects.

### Clean Testing Code

**Guideline on Writing Clean JavaScript Tests.** JavaScript is one of the easiest languages to write
unclean code that works. This attribute makes code cleanness a critical topic in the JavaScript
community. Guides on how to write clean JavaScript source code is prevalent. However, guides on
writing clean, maintainable tests are not as prevalent and not so formalized. We could conduct a
study on writing clean tests in JavaScript. In this study, we could include testing best practices and
include anti-patterns to avoid.

**JS Testing Nose.** JSNose uses static and dynamic analysis to identify JavaScript code smells. Tests
code has different variants of code smells (Van Deursen, et al. 2001). Unclean testing code is less
maintainable and harder to understand. We could try to build a tool like JSNose, but for JavaScript
test code. To the best of my knowledge, "testdouble.js" is the only JavaScript testing framework that
emits a warning when a testing code smell is present, and it only checks for a single testing code
smell which is stubbing and verifying a function in the same test case. There are still many cases
where developers could benefit from testing code smells warnings.

### Correlations with Testability

**Is Reactive programming the Panacea for Improved Test Coverage in the Front-end?** Reactive
functional programming has gained lots of traction in more than one programming language in the
past five years. Its adapters argue that it simplifies code and makes it declarative, concise, and more
maintainable. RXJS is the mostly used reactive programming library in JavaScript. Thousands of
JavaScript and Typescript projects use it. RXJS introduces marble tests which are concise declarative
tests. We could study whether projects that use RXJS and especially those that use marble tests have
better code coverage and testing-quality metrics.

**Design Patterns and Tests Coverage.** Software design patterns and concepts like immutability have a
direct effect on code testability. To the best of my knowledge, there are not any empirical studies
that correlate the design patterns used with testing metrics. We could empirically study how
different design patterns in JavaScript correlate with code coverage. To do this, we could check
JavaScript libraries that allow developers to use distinct design patterns. For example, we could
assume projects that use "electrolyte," "di.js," or "injection-js" to use dependency injection in their
project. Mining projects that use the "immutable-js" library could help us identify projects that are
heavily influenced by the concept of immutability. Mining projects that use "redux" could give us a
sample of projects that adhere to unidirectional data flow for state management. We could do the
same for other design patterns and determine empirically what design patterns are optimal for
writing testable JavaScript code.

**Just Throw Away JavaScript?** JavaScript is the only scripting language the browser understands.
However, several programming languages that compile to JavaScript have emerged in the last few
years. Elm, ReasonML, Idris, Typescript, and ClosureScript are some of these languages. We would
like to know how the usage of these languages would affect testing-quality metrics like code
coverage. We could conduct an empirical study that compares the testing-quality metrics of projects
that use these languages to projects that use JavaScript.

**Abstract away the DOM via JavaScript Frameworks for Testability?** Modern client-side JavaScript
frameworks like React, Angular, and Vue abstracts away DOM interactions. Our paper shows that
developers face difficulties in testing DOM interactions. We could have a similar study to compare

code coverage and test-quality metrics in newer projects that use these frameworks with client-side
projects that do not. This comparison could help us know empirically whether these frameworks
would help in developing more testable web applications.

**What makes a JavaScript Testing Framework Superior?** Our paper has shown that some testing
frameworks have more test coverage than others. For example, projects that use Mocha had more
test coverage than those that used Jasmine. We could study why specific testing frameworks are
better than others and what factors lead to a robust testing framework. This study could guide
developers on what to look for when choosing a testing framework. This study could also be the
spark for further researches that proposes new features to testing frameworks. One of the factors
that lead developers not to write tests is the performance of tests. We could also check if the
performance of a testing framework correlates with the testing-quality metrics of the software
projects that use it. Besides that, we could search whether there are benchmarks for JavaScript
testing frameworks. If not, we could develop our own.

**What Paradigm to Follow for Better Testability?** JavaScript is one of the few well-known
programming languages that embraces features for object-oriented, procedural, and functional
programming. As time moves on, more features from different paradigms see the light through
ECMAScript versions. The plethora of features makes JavaScript more appealing for a broader range
of developers. However, it leaves a wide range of developers confused on what features or design
patterns are optimal for a successful software engineering project. One of the factors that affect the
success of a software project is code testability. Using TESTSCANNER and the same methodology we
have used, we could compare testing metrics for projects that embrace object-oriented
programming to those that embrace functional programming and determine which paradigm is
optimum for writing JavaScript testable code.

### Autogenerate Tests and Setup

**Autogenerate JavaScript White-box Tests.** Whitebox testing is testing the internals of a program. It
takes into consideration specific implementations rather than behaviour. Whether a unit test is a
white-box test or not depends on the size of the unit under test. Usually testing small units results in
white-box testing. A high degree of today’s unit tests is white-box tests. The problem with white-box
tests is that they need to get updated when the internal implementation changes. There are
arguments that developers should not manually write white-box tests and that tools should
autogenerate them. These tools are available for statically typed programming languages.
Developing such tools is more challenging in JavaScript due to its dynamic nature and extensive
usage of asynchronous code and events. We could perform a study on white-box tests generation
for JavaScript. We could also capitalize on the fact that Typescript is statically typed and try to build
a tool like Pex for Typescript if this tool is not already available.

**Autogenerate Boilerplate Stubs for JavaScript Tests.** Unit tests usually require dependencies to be
mocked and stubbed. Mocking and stubbing dependencies is a laborious task. Tools can hardly
autogenerate mocks and stubs with high accuracy. However, a significant degree of boilerplate setup
could be auto-generated. For example, a static analyser could easily know the functions used from a
dependency, the type of the return value of these functions, and the type of arguments of these
functions. These data could help build a basic boilerplate for dependencies that need to be stubbed
and mocked. The developer could then update the stubs as needed.

### Topics Unrelated to Tests

**Multithreading in JavaScript.** JavaScript is fast in handling I/O operations because of its "event loop"
concurrency model. However, since JavaScript is single threaded, it does not take advantage of

parallel computing, and its performance suffers in computationally expensive tasks. With time,
parallel computing becomes more and more critical. The number of cores a CPU could utilize is
increasing much more rapidly than the speed of the cores itself. Native web workers have been
supported natively by few browsers. This feature could open a massive door for more usages of
JavaScript in the front-end like machine learning and computationally demanding games. We could
perform an empirical study on the usages of web workers by mining JavaScript projects on GitHub
that uses this feature.

**What features do developers want?** JavaScript features are proliferating, and each new ECMAScript
version introduces new features. These features are only a fraction of the requested features from
the JavaScript community. The ECMAScript committee chooses what features to add based on what
it thinks will be beneficial for the community. However, knowing what features will be beneficial is
not an easy problem to solve. One of the factors that could help to determine what features will be
beneficial is to know the trends of adapting previous features. This knowledge could help us predict
what upcoming features the community would mostly welcome and use. To know the trends of
previous features, we could mine recent established JavaScript projects on GitHub and check what
features are being mostly used and what features are not. A similar study was conducted five years
ago (Gude, Hafiz and Wirfs-Brock 2014). However, a lot of new features have been added to the
language in those five years. Also, the previous study did not use GitHub to mine these projects.
Instead, it collected popular client-side JavaScript libraries and scripts from top web-pages from
Alexa. The GitHub approach of mining data is superior for more than one reason. One of these
reasons is that GitHub includes server-side JavaScript projects.

**Refactoring JavaScript/TypeScript.** JavaScript's static analyses tools proliferated in the last few
years. However, static analysis tools and refactoring tools for JavaScript are not as advanced as tools
for statically typed languages like Java. Refactoring code is crucial for the maintainability of a
software solution in the long run. Automated refactoring is useful since it saves time and eliminates
human errors. We could conduct a study on the state of existing refactoring tools in JavaScript. We
could propose a refactoring tool if convenient in either JavaScript or Typescript.

**Dead Code.** Dead code hinders the performance of web applications and slows down the
development process. The adverse effects of dead code are prominent in the front-end since clients
download the code when they visit a web application. As the download size increases, the page
loading time increases which adversely affects the user experience. We could a literature survey on
the status quo of tools that identify and remove dead code for JavaScript.

**JavaScript Optimizers.** JavaScript execution speed is important for web applications. Over the last
couple of years, tools that optimize JavaScript code have appeared on the scene. Google and
Facebook have released "Closure compiler” and “Prepack,” respectively. Closure compiler uses static
analysis to optimize the code. On the other hand, Prepack uses static analysis and symbolic
execution to compile source JavaScript code to a faster version. We could study and benchmark
these tools by compiling various JavaScript projects on GitHub via these tools and analyse the
results.

## References

Fard, Amin Milani, and Ali Mesbah. "JavaScript: The (un) covered parts." In Software Testing,
Verification and Validation (ICST), 2017 IEEE International Conference on, pp. 230-240. IEEE, 2017.

Gude, S, M Hafiz, and A Wirfs-Brock. 2014. “JavaScript: The Used Parts.” \_2014 IEEE 38th Annual Computer Software and Applications Conference. 466 - 475.

Hori, Akihiro, Shingo Takada, Toshiyuki Kurabayashi, and Haruto Tanno. 2018. “Image-based
approach to determining regression test results of dynamic web applications.” _International
Journal of Software Engineering and Knowledge Engineering_ (World Scientific) 28 (07): 1001-1025.

Van Deursen, Arie, Leon Moonen, Alex Van Den Bergh, and Gerard Kok. 2001. “Refactoring test
code.” _Proceedings of the 2nd international conference on extreme programming and
flexible processes in software engineering (XP2001)._ 92 - 95.
