import { useState } from "react";

const Content = () => {
    const [text, setText] = useState('');

    const changeText = (event) => {
        event.preventDefault();
        const myStory = event.target.story.value;
        setText(myStory);
        
        event.target.reset();
    };
    return (
        <section id="wrapper">
            <form onSubmit={changeText}>
               <textarea placeholder="Email" name="story"></textarea>
                <textarea placeholder="Message" name="story"></textarea>
                <button type="submit">Submit</button>
            </form>
            <div className="output">{text}</div>
        </section>
    );
};

export default Content;
