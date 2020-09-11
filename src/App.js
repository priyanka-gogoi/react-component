import React from 'react';
import Button from './Button';


class App extends React.Component  {
    
    render() {
        return (
            <div>
                <Button link='https://api.unsplash.com/collections/139386/photos/?per_page=30&client_id=2P5agKhwgSJgGhodZ3F6BqNEKnYsFnNQWGxr0IjKgcQ' text='Collection1'/>
                <Button link='https://api.unsplash.com/collections/1580860/photos/?per_page=30&client_id=2P5agKhwgSJgGhodZ3F6BqNEKnYsFnNQWGxr0IjKgcQ' text='Collection2'/>   
            </div>
        )
    }
}
export default App;