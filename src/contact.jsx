/*
contact.jsx
Patrick Maguire
301424195
Sept/28/2024
*/
export default function Contact(){
    return(
        <>
            <h3>My Contact Information:</h3>
            <p>Email me at: pmaguir2@my.centennialcollege.ca</p>

            <form>
                <label for="fName">First Name:</label>
                <input type="text" id="fName" name="fName"></input>

                <label for="lName">Last Name:</label>
                <input type="text" id="lName" name="lName"></input> <br/>

                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone"></input>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email"></input><br/>

                <label for="message">Send a message:</label>
                <textarea id="message" name="message"></textarea>

                <input type="submit" id="submit" value="Send"/>
            </form>
        </>
    );
}