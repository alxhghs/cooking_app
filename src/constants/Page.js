import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Search from '../components/Search'

class Page extends Component {
  componentDidMount() {

  }

  handleSearch(e) {

  }

  render() {
    let { displayedRecipes, isFetched } = this.props.page

    let recipes = displayedRecipes.map((recipe, index) => {
      return <Recipe recipe={recipe} key={index} />
    })

    return(
      <div>
        <Search onChange={this.handleSearch.bind(this)} />
        <ul>
          {
            isFetched
            ?
            <p>Loading...</p>
            :
            recipes
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
