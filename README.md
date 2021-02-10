# Kanban board

![Kanban Board UI](https://github.com/mateuszjansowa/React-Kanban-board/blob/main/assets/AppUI.PNG?raw=true)

Thanks for viewing my repository! I'd like to introduce you to my Kanban Board app built with **React** according to [**ESLint Airbnb rules**](https://github.com/airbnb/javascript/tree/master/react).

Kanban work methodology is used widely in many companies. It is often related to when Agile is not efficient or impossible to introduce. You can read more about Kanban [here](https://www.atlassian.com/agile/kanban)


**The Kanban Board enables you to**:
-   Create *tasks* with a detailed *description*;
-   *Assign a person* to the task;
-   Set *due date and time* of the task;
-   Move defined tasks between *columns* with defined *limits*;
-   *Save tasks to Local Storage* so you don't miss them when you close your app;
-   *Clear tasks* from the Local Storage.



### ⚙️ Installation

The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). To run the app on your machine you should install all dependencies. Then create a localhost port and run your web explorer.

Let's start with installing all dependencies. Move to the app main workspace and run:

    npm i

To create a localhost port you should type:

    npm start

Your Kanban Board is ready at port 8080.

    http://localhost:8080/



### 💡 Solutions provided in the app

- The app uses modern React features including **Hooks** and **Context API**. Components are split and kept as simple as possible. The `<App />` component holds the logic of the app. It allows tasks to travel between columns. It stops them from moving if the column limit is already reached.

- Talking about the `<App />` component, it utilizes **`useState`** hook. Thanks to that it is possible to render `<Task />` components with the data saved in the state. Data is provided by the `<Form />` module. `<App />` handles all the tasks added to the `<Board />` component. It also imports and provides the context to the `<Task />` and `<Column />` components.

- Hook **`useReducer`** is used to control the form with user inputs. Thanks to destructuring it is possible to conveniently store data.

        const reducer = (state, { name, value }) =>
    		{
    		    return { ...state, [name]: value };
    	    };

- LocalStorage enables the app to store the data inside it. I created my **custom hook** called **`useStorage`** to handle data saving. Data is uploaded from localStorage as soon as the Kanban Board is mounted. Tasks are saved when the explorer tab is going to be closed.

        const [saveStorage, getStorage] = useStorage();


- What's worth mentioning is the fact that columns are rendered dynamically. The app follows the rules you specify. You can adjust the app in the way you our your company organizes work.

       const columnSettings = [
    	    { name: 'Zadania', id: 1, limit: Infinity },
    	    { name: 'W trakcie', id: 2, limit: 2 },
    	    { name: 'Testowanie', id: 3, limit: 3 },
    	    { name: 'Zrobione', id: 4, limit: Infinity },
    	  ];

- I designed UI in a minimalistic way. Styling of the Kanban Board is achieved using a CSS preprocessor called [**SASS**](https://sass-lang.com/).<br />
Colors can be changed anytime because they are assigned to variables in `var.scss`.<br />
I have used [ColorHunt](https://colorhunt.co/) to select colors matching the pallette.<br />
Font pairings were generated using [Fontjoy](https://fontjoy.com/).<br />



### 🙏 Special thanks

Special thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) for providing me with the task and code review.

If you have any questions feel free to get in touch with me (contact in the [profile readme](https://github.com/mateuszjansowa)).

