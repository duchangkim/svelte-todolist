<div class="field">
  <div
    class="control has-icons-left has-icons-right todo-item"
    class:todo-item--checked={todo.checked}>
    <input
      class="input"
      type="text"
      {placeholder}
      bind:value={todo.text}
      on:change="{(e) => onHandleModify(e, todo.id)}"
    />
    <span 
      class="icon is-small is-left"
      on:click="{() => onHandleCheck(todo.id)}"
    >
      <i class="fas fa-check" />
    </span>
    <span 
      class="icon is-small is-right"
      on:click="{() => onHandleRemove(todo.id)}"
    >
      <i class="fas fa-trash" />
    </span>
  </div>
</div>

<script lang="ts">
  import type {
    ITodoItem, 
    IHandleCheck, 
    IHandleRemove, 
    IHandleModify,
  } from '../interfaces';

  export let todo: ITodoItem;
  export let onHandleCheck: IHandleCheck;
  export let onHandleRemove: IHandleRemove;
  export let onHandleModify: IHandleModify;

  let placeholder = "할 일을 입력해주세요";
</script>

<style lang="scss">
  .control.has-icons-left,
  .control.has-icons-right {
    & .icon {
      pointer-events: inherit;
      transition: color 0.5s;
      cursor: pointer;

      &:hover {
        color: #363636;
      }
    }

    & .input:focus ~ .icon {
      color: #dbdbdb;
    }
  }

  .todo-item {
    &--checked {
      opacity: 0.4;
    }
  }
</style>

