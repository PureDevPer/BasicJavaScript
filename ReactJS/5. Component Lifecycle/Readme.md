# Component Lifecyle

~~~
Render
~~~
1. componentWillMount() 
2. render() 
3. componentDidMount()

~~~
Update
~~~
1. componentWillReceiveProps() 
2. shouldComponentUpdate(): check if new props are updated or not. Return true/false
3. componentWillUpdate()
4. render() 
5. component