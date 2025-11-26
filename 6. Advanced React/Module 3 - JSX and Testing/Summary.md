# Module 3: JSX and Testing

This module on advanced React concepts covers several key topics related to JSX, component composition, and testing.

### JSX and Component Composition

* You learned the difference between components and elements, where components are functions that return a tree of elements, while elements are lightweight representations of the DOM.
* The importance of component composition was emphasized, introducing techniques like containment (using the children prop) and specialization (creating specific components based on others).

### Dynamic Manipulation and Advanced Patterns

* You explored manipulating children dynamically in JSX using React APIs like React.cloneElement and React.Children.map, which enhance component flexibility.
* The module introduced advanced patterns for reusing behavior, including higher-order components (HOCs) and render props, which help manage cross-cutting concerns in React applications.

### Component Testing

* The final section focused on testing components using the React Testing Library, highlighting its importance for ensuring application functionality.
* You learned best practices for testing and were introduced to various APIs for querying elements and making assertions, reinforcing the significance of well-designed tests in catching errors.

## Additional resources

Here is a list of additional resources for JSX Deep Dive:

* Chakra-UI
  * https://chakra-ui.com/
  * is an open-source component library that embraces all the concepts explained during this lesson, being a nice option if you would like to start your project with a set of atomic components that have been carefully designed with flexibility in mind, so that they can be customized as per your theme requirements. 

* Compound components with hooks
  * https://kentcdodds.com/blog/compound-components-with-react-hooks
  * is an article that illustrates how a combination of component composition, context and hooks can lead to a clean and concise component design.  

* React Fragments
  * https://legacy.reactjs.org/docs/fragments.html
  * from the official React docs illustrates how to group a list of React children without adding extra nodes to the DOM.

## Additional resources

Here is a list of additional resources as you continue to explore Reusing Behavior:

* Downshift
  * https://github.com/downshift-js/downshift
  * is a popular open-source library that implements an autocomplete, combo box or select experience using the render prop pattern. 
* Render props
  * https://legacy.reactjs.org/docs/render-props.html
  * from the official React docs. 
* Higher Order Components
  * https://legacy.reactjs.org/docs/higher-order-components.html
  * from the official React docs. 
* Forwarding Refs
  * https://legacy.reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components
  * from the official React docs showcases in detail how to forward refs in higher-order components, so that they are passed through properly.

## Additional resources

Here is a list of additional resources as you continue to explore Integration tests with React Testing Library:

* React testing library
  * https://testing-library.com/docs/react-testing-library/intro/
  * official documentation. 
* Jest
  * https://jestjs.io/docs/getting-started
  * official documentation. 
* Continuous delivery
  * https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment
  * is a great article from Atlassian that illustrates the differences between Continuous integration, delivery and deployment, and how they all tie together. 
* Practical test pyramid
  * https://martinfowler.com/articles/practical-test-pyramid.html
  * is an extensive article that dives into the importance of test automation, showing you which kind of tests you should be looking for in the different levels of the pyramid and providing practical examples on how those can be implemented. 