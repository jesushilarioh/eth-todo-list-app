const TodoList = artifacts.require('./TodoList.sol')

contract('TodoList', accounts => {
  before(async () => {
    /**
     * Create an instance of TodoList that represents the
     * default address managed by TodoList
     */
    this.todoList = await TodoList.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.todoList.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
    // console.log(address)
  })

  it('lists tasks', async () => {
    const taskCount = await this.todoList.taskCount()
    const task = await this.todoList.tasks(taskCount)
    // console.log('taskCount: ', taskCount.toNumber())
    // console.log('task', task)
    assert.equal(task.id.toNumber(), taskCount.toNumber())
    assert.equal(task.content, 'Check out dappuniversity.com')
    assert.equal(task.completed, false)
    assert.equal(taskCount.toNumber(), 1)
  })

  it('creates tasks', async () => {
    const result = await this.todoList.createTask('A new task')
    const taskCount = await this.todoList.taskCount()
    // console.log('result: ', result)
    // console.log('taskCount: ', taskCount)
    assert.equal(taskCount, 2)
    const event = result.logs[0].args
    // console.log('event: ', event)
    assert.equal(event.id.toNumber(), 2)
    assert.equal(event.content, 'A new task')
    assert.equal(event.completed, false)
  })
})