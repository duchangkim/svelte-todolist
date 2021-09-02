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

	let todos: Array<ITodoItem> = [
		{ id: 0, checked: false, text: 'Finish svelte tutorial' },
		{ id: 1, checked: false, text: 'Go to peterpan' },
		{ id: 2, checked: false, text: 'Eat lunch' },
	];
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
		// 배열 아이템을 수정할 경우에는 원본 배열을 직접 수정하지 않고 재할당 한다
		todos = todos.filter((todo) => todo.id !== id);
	}
	const onHandleModify: IHandleModify = (e: Event & { currentTarget: HTMLInputElement }, id: number) => {
		const index = todos.findIndex((todo) => todo.id === id);
		todos[index]['text'] = e.currentTarget.value;
	}

	// vue에서 computed와 비슷한 개념 -> 좀 더 찾아보기
	$: lastId = todos[todos.length - 1].id || 0;
</script>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>