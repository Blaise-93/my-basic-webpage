import React, { Component } from 'react';

class LinkSection extends Component {
    state = {
        btn_anchor_id: 'https://training.zuri.team/',
    
        books: 'http://books.zuri.team',
        books_python: 'https://books.zuri.team/python-for-beginners?',
        ref_id: 'Blaise Ejikeme', 
        pitch_id: 'https://background.zuri.team',
        design: "https://books.zuri.team/design-rules"      
    }

    btn_id = {
        margin: 16,
        padding: 40,
        border: 0,
        borderRadius: 30,
        outline: 'none',
        backgroundColor: '#FFF',
        fontSize: 15,
        cursor: 'pointer',
        fontFamily: 'sansSerif',
        fontWeight: 700
      }
  
    
   
  

    render() {
        return (
       <div >
            <h3 className='mt-3 text-info'>
                Welcome to our book marketplace. 
            </h3>
            <p>Your home of affordable products is here.</p>
            <button a style={this.btn_id}><a href={this.state.btn_anchor_id} >Zuri</a></button>
            <hr/>
            <p>This is where you find books about design and coding.Kindly checkout by clicking the button.</p>
            <button ><a href={this.state.books} >Zuri Books</a></button>
            <hr/>
            <p>This where you feature the book as if you were selling it.Kindly checkout by clicking the button.</p>
            <p>NB: Your reference id - {this.state.ref_id} must be unique and will give you royalties if any sales of the book come.</p>
            <button ><a href={this.state.books_python} >Zuri Searches</a></button>
            <hr/>
            <p>Hi there, here where where you pitch a service for doing background checks on coders. Our products are mouthwatering and unique. Kindly check it out</p>
            <button ><a href={this.state.pitch_id} >Zuri Background Check</a></button>
            <hr/>
            <p>Here, you  will pitch the free design book offered by Zuri. Our products are mouthwatering and unique. Kindly check it out via clicking the button.</p>
            <button ><a href={this.state.design} >Product Design</a></button>

        </div>
        );
        }

}
 

export default LinkSection;
