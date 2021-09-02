<div class="field has-addons">
  <div class="control" style="width: 100%;">
    <input
      class="input"
      type="text"
      placeholder="할 일을 입력해주세요"
      on:keyup="{e => onHandleKeyup(e)}"
      bind:value="{todoInput}"
    />
  </div>
  <div class="control">
    <button class="button is-info" on:click="{() => onHandleAdd()}">
      추가하기
    </button>
  </div>
</div>

<script lang="ts">
  import type { IHandleKeyup } from '../interfaces';
  export let todoInput = '';
  export let onHandleKeyup: IHandleKeyup;
  export let onHandleAdd;
</script>