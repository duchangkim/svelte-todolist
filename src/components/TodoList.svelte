<div>
  {#if remaining}
    <p>남은 일이 {remaining}개 남았어요</p>
  {:else}
    <p>남은 일이 없어요</p>
  {/if}
  <br />
  {#each todos as todo (todo.id)}
    <TodoItem {todo} {onHandleCheck} {onHandleRemove} {onHandleModify} />
  {/each}
</div>

<script lang="ts">
  import TodoItem from "./TodoItem.svelte";
  import type { ITodoItem, IHandleCheck, IHandleRemove, IHandleModify } from '../interfaces';

  export let todos: Array<ITodoItem>;
  export let onHandleCheck: IHandleCheck;
  export let onHandleRemove: IHandleRemove;
  export let onHandleModify: IHandleModify;

  $: remaining = todos.filter((t) => !t.checked).length;
</script>

