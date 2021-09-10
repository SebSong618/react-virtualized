import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider'; 
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import logo from './logo.svg';
import './App.css';

import loremIpsum from 'lorem-ipsum';

import { List, AutoSizer } from "react-virtualized";

const rowCount  = 2000;
const rowHeight = 350;

class App extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx, 
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
          count: 1, 
          units: 'sentences',
          sentenceLowerBound: 4,
          sentenceUpperBound: 8 
        })
      }
    });

    this.state = {value : 30};
  }

  handleChange(e, newValue){
    this.setState({value: newValue});
  }
  
  renderRow({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <p>{index + 1}:</p>
        </div>
        <div className="content">
          <div>Q: {this.list[index].text}</div>
          <div>O: {this.list[index].text}</div>
          <div>O: {this.list[index].text}</div>
          <div>O: {this.list[index].text}</div>
          <div>O: {this.list[index].text}</div>
          <div>O: {this.list[index].text}</div>
          <div>O: {this.list[index].text}</div>
          <div>O: {this.list[index].text}</div>
          <div>O: {this.list[index].text}</div>
          <div>O: {this.list[index].text}</div>
          <Slider value={this.value} aria-labelledby="continuous-slider"  onChange={this.handleChange} />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
           
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="list">
          <AutoSizer>
          {
            ({ width, height }) => {
              return <List
                width={width}
                height={height}
                rowHeight={rowHeight}
                rowRenderer={this.renderRow}
                rowCount={this.list.length}
                overscanRowCount={3} />
            }
          }
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export default App;