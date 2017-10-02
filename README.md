
# aurelia-fusejs

 This is an [Aurelia](http://aurelia.io/) plugin in which there is two value converters in order to use [fusejs](http://fusejs.io/).


###    1. Installation
* ```npm install aurelia-fusejs --save``` or ```yarn add aurelia-fusejs```
* add the following line in your aurelia startup file

    ```javascript
    .plugin('aurelia-fusejs');
    ``` 
    if you use ```webpack``` use
    ```javascript
     .plugin(PLATFORM.moduleName('aurelia-fusejs'));
    ```

###    2. Usage

There are two value converters in this plugin for fusejs

* ### ```fuse```

    Should be applied on an **```array```** of objects and should be provided two parameters as input for it: your fuzzy search options which must be of type **```FuseOptions```** and the **```criteria```** that is your searching string.
    
    ```html
    <ul>
        <li repeat.for="book of books | fuse:options:criteria">
            <span>${book.title}</span>
        </li>
    <ul>
    ```
    
* ### ```fuseHighlight```

    Had you provided **```includeMatches: true```** in your fusejs options, you can use the ```fuseHighlight``` value converter to get highlighted values based on the ```css``` class you pass to it as an input. Having done this way, you will get an extra property on your **item** property of fusejs resuls named *highlighted* which includes keys for the search result, the usage is like following:
    
    ```javascript
        this.options = {
            //Omitted code
            includeMatches: true,
            keys: [{
                    name: 'title',
                    weight: 0.3
                }, {
                    name: 'author.lastName',
                    weight: 0.7
                }]
            //Omitted code
        };
    ```
    
    ```css
    <style>
        .my-highlight{
            color:'#753B85';
        }
    </style>
    ```

    ```html
    <ul>
        <li repeat.for="book of books | fuse:options:criteria | fuseHighlight:'my-highlight'">
            <span innerhtml.bind="book.item.highlighted.title || book.item.title"></span>
            <span>-></span>
            <span>${book.item.author.firstName}</span> 
            <span innerhtml.bind="book.item.highlighted.author.lastName || book.item.author.lastName"</span>
        </li>
    </ul>
    ```
    
* Bear  in mind that if the key of an item does not match the criteria the ```highlighted.property``` name will be null, thus you should handle it with coalesce operator in your code
    ```html
    <!-- omitted snippet -->
    <span innerhtml.bind="book.item.highlighted.author.lastName || book.item.author.lastName"</span>
    <!-- omitted snippet -->
    ```
