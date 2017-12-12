import React, { Component, propTypes } from 'react'
import CoursesList from './CoursesList'
import CourseAddForm from './CourseAddForm'

class App extends Component {
    
    constructor(...props) {
        super(...props)

        this.state = {
            courses : [
                {
                    id: 1, name: 'React desde cero', teacher: 'Jhonatan MirChar'
                },
                {
                    id: 2, name: 'Drupal 8 desde cero', teacher: 'Alberto Quiroga'
                }
            ]
        }
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    }

    handleOnAddCourse(e) {
        // alert('evento en React')
        e.preventDefault()
        
        let form = e.target, 
            course = {
                id: form.id.value ,
                name: form.name.value ,
                teacher: form.teacher.value
            }

        this.setState({
            courses: this.state.courses.concat([course])
        })

        form.reset()
    }

    render() {
        return(
            <div className="CourserList" >
                <CourseAddForm onAddCourse={this.handleOnAddCourse} />
                <CoursesList courses={this.state.courses} />
            </div>
        )
    }
}

App.propTypes = {}

App.defaultProps = {}

export default App