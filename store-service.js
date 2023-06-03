
const fs = require("fs");
let items=[];
let categories=[];

const initialize = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./data/items.json", "utf8", (error, data) => {
            if (error) {
                reject("Unable to read file");
            } else {
                items = JSON.parse(data);
                fs.readFile("./data/categories.json", "utf8", (error, data) => {
                    if (error) {
                        reject("Unable to read file");
                    } else {
                        categories = JSON.parse(data);
                        resolve();
                    }
                })
            }
        })
    });
};

fs.readFile('./data/items.json', 'utf8', (err, data) => { 
    items = JSON.parse(data);
});

fs.readFile("./data/categories.json", "utf8", (error, newdata) => {
    categories = JSON.parse(newdata);
});

const getItems = () => {
    return new Promise((resolve, reject) => {
        if (items.length == 0) {
            reject("No items found");
        }
        resolve(items);
    });
};


const getPublishedItems = () => {
    return new Promise((resolve, reject) => {
        const publishedItems = items.filter(item => item.published);
        if (publishedItems.length == 0) {
            reject("No published items found");
        }
        resolve(publishedItems);
    });
};

const getCategories = () => {
    return new Promise((resolve, reject) => {
        if (categories.length == 0) {
            reject("No categories found");
        }
        resolve(categories);
    });
};


// fs.readFile('./data/categories.json', 'utf8', (err, category) => { 
//     if (err) throw err; 
//     // console.log(category);
// });

// const promise = new Promise((resolve, reject) => {
//     fs.readFile('./data/items.json', 'utf8', (err, data) => {
//       if (err) {
//         reject("unable to read file");
//       } else {
//         resolve(data);
//       }
//     });
//   });
  
//   promise.then((data) => {
//     console.log(data);
//   }).catch((err) => {
//     console.log(err);
//   });
  
// getPublishedItems() = new Promise((resolve, reject) => {
//     fs.readFile('./data/items.json', 'utf8', (err, items) => {
//       if (items.length==0) {
//         reject("no results returned");
//       } else {
//         resolve(items);
//       }
//     });
//   });
  



module.exports = {initialize,getPublishedItems,getCategories,getItems};