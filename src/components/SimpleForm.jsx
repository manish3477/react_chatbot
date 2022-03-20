import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'skyblue',
  headerFontColor: 'black',
  headerFontSize: '18px',
  botBubbleColor: 'green',
  botFontColor: '#fff',
  userBubbleColor: 'yellow',
  userFontColor: 'black',
};




class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { height, weight  } = steps;

    this.setState({ height, weight });
  }

  render() {
    const { height, weight } = this.state;
   
  
    const total = parseInt(height.value) + parseInt(weight.value);
let size ;

    if(total <= 100){
      size = " S";
    }else if (total >100 && total <= 200){
      size = " M"
    }
    else if (total >200 && total <=300){
      size = " L"
    }else{
      size = " XL"
    }
   
    
   
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Height:</td>
              <td>{height.value}cm</td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td>{weight.value}kg</td>
            </tr>
            <tr>
              <td >
             we recomend you size: {size}
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};


class SimpleForm extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
        <ChatBot
        headerTitle="Danfe Store"
        floating= {true}
        customDelay= {2000}
       
        
  speechSynthesis={{ enable: false, lang: 'nep' }}
          steps={[
            {
              id: '1',
              message: 'Hello!',
             trigger: '2',
            },
            {
              id: '2',
              message: "I'm your assistant, How can I help you ?",
              trigger: '3',
            
            },
            {
              id: '3',
              options: [
                { value: 'size', label: 'Calculate Size', trigger: '4' },
                { value: 'payment', label: 'Payment Methods', trigger: '7' },
                { value: 'orderstatus', label: 'Delivery Status', trigger: '8' },
              ],
            },
            {
              id: '4',
              message: "Enter your Height in cm.",
              
              trigger: 'height',
            },
            {
              id: 'height',
              user: true,
              trigger: '5',
            },
            {
              id: '5',
              message: "Enter your Weight in kg.",
              trigger: 'weight',
            },
            {
              id: 'weight',
              user: true,
              trigger: '6',
            },
            {
              id: '6',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'morehelp',
            },
            {
              id: '7',
              component: (
                <div> 
                  <ol >
                    <li>manish</li>
                    <li>promish</li>
                    <li>rojesh</li>
                  </ol>
                   </div>
              ),
              trigger: "morehelp",
            },
            {
              id: '8',
              component: (
                <div> 
                  <a href='/trackorder'>Track Orders</a>
                   </div>
              ),
              trigger: "morehelp",
            },
            {
              id: 'morehelp',
              message: 'did you need more help?',
              trigger: 'morehelp-question',
            },
            {
              id: 'morehelp-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'help-yes' },
                { value: 'no', label: 'No', trigger: 'help-no' },
              ],
            },
            {
              id: 'help-yes',
              message: 'How can I help you?',
              trigger: '3',

            },
            {
              id: 'help-no',
              message: 'Thank you ! hope to meet you soon.',
              end: true,

            },
            

          ]}
        />
        </ThemeProvider>
      );
    }
  }
  
  export default SimpleForm;
  