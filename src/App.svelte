<section class="hero is-primary is-fullheight">
  <div class="hero-head">
    <Navbar />
  </div>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns is-desktop">
        <div class="column"></div>
        <div class="column">
          <h1 class="title">Todo List</h1>
          <h2 class="subtitle">Built with Svelte, Bulma</h2>
					<TodoInput {todoInput} {onHandleKeyup} {onHandleAdd}/>
					<TodoList {todos} {onHandleCheck} {onHandleRemove} {onHandleModify} />
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</section>

<script lang="ts">
	// 로컬스토리지와 연동해서 나갔다가 와도 유지되게 수정
	import type {
		IHandleKeyup,
		ITodoItem, 
		IHandleCheck, 
		IHandleRemove, 
		IHandleModify,
	} from './interfaces';
	import Navbar from './components/Navbar.svelte';
	import TodoInput from './components/TodoInput.svelte'
	import TodoList from './components/TodoList.svelte';
	
	let todos: Array<ITodoItem> = JSON.parse(localStorage.getItem('todos')) || [];
	let todoInput = '';

	const onHandleAdd = () => {
		if (!todoInput) return;

		const newTodo: ITodoItem = {
			id: ++lastId,
			checked: false,
			text: todoInput,
		};

		todos = [...todos, newTodo];
		todoInput = '';
	}
	const onHandleKeyup: IHandleKeyup = (
		e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }
	) => {
		todoInput = e.currentTarget.value;

		if (e.key === 'Enter') {
			onHandleAdd();
		}
	}
	const onHandleCheck: IHandleCheck = (id: number) => {
		const index = todos.findIndex((todo) => todo.id === id);
		todos[index]['checked'] = !todos[index]['checked'];
	}
	const onHandleRemove: IHandleRemove = (id: number) => {
		todos = todos.filter((todo) => todo.id !== id);
	}
	const onHandleModify: IHandleModify = (e: Event & { currentTarget: HTMLInputElement }, id: number) => {
		const index = todos.findIndex((todo) => todo.id === id);
		todos[index]['text'] = e.currentTarget.value;
	}

	// vue에서 computed와 비슷한 개념 -> 좀 더 찾아보기
	$: lastId = todos[todos.length - 1]?.id || 0;
	$: todos ? localStorage.setItem('todos', JSON.stringify(todos)) : null;
</script>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>