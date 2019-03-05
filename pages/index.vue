<template>
  <div class="container">
    <h1 class="title">
      Nuxt.js + pdfkitでフォームの内容をPDF出力
    </h1>
    <form
      class="st-form"
      action="/api/pdf"
      method="POST"
    >
      <input
        :value="$store.state.csrfToken"
        type="hidden"
        name="_csrf"
      >
      <div class="st-datefield">
        <label for="issue">発行日</label>
        <input
          id="issue"
          type="date"
          name="issue"
          required
          aria-required="true"
        >
      </div>
      <div class="st-textfield">
        <label for="client_name">会社名</label>
        <input
          id="client_name"
          type="text"
          name="client_name"
        >
      </div>
      <div class="st-textfield">
        <label for="charge">担当者名</label>
        <input
          id="charge"
          type="text"
          name="charge"
        >
      </div>
      <div class="st-textfield">
        <label for="content">但し書き</label>
        <input
          id="content"
          type="text"
          name="content"
        >
      </div>
      <div class="st-textfield">
        <label for="price">金額</label>
        <input
          id="price"
          type="number"
          name="price"
        >
      </div>
      <div class="st-textfield">
        <label for="bikou">備考</label>
        <textarea
          id="bikou"
          name="bikou"
          cols="30"
          rows="10"
        />
      </div>
      <button type="submit">
        発行
      </button>
    </form>
  </div>
</template>

<style>
.container {
  width: 80%;
  margin: 60px auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 20px;
  text-align: center;
}

form {
  width: 480px;
  padding: 20px;
  border: 1px solid #35495e;
  margin: 0 auto;
}
.st-textfield {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
input,
textarea {
  border: 1px solid #35495e;
}
.st-textfield input {
  height: 36px;
  padding: 0 4px;
}
button {
  cursor: pointer;
  background-color: #35495e;
  color: #fff;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.16);
  display: block;
  margin: 0 auto;
}
button:hover,
button:focus {
  background-color: #43607c;
}
button:active {
  box-shadow: none;
}
.st-datefield {
  border-bottom: 1px solid #43607c;
  margin-bottom: 10px;
}
.st-datefield input {
  border: none;
  height: 36px;

}
</style>
