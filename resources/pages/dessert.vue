<template>
  <v-card>
    <v-card-title>
      <v-btn depressed color="primary" @click="addItem"> + เพิ่ม </v-btn>
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts" :search="search">
      <template v-slot:[`item.action`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
    <DessertForm ref="DessertForm" @add="submitAdd" @edit="submitEdit" />
    <v-snackbar v-model="snackbar.show" :color="snackbar.type">
      {{ snackbar.text }}
      <v-btn color="blue" text @click="snackbar.show = false"> Close </v-btn>
    </v-snackbar>
    <v-dialog v-model="confirm" max-width="350">
      <v-card>
        <v-card-title class="headline"> ยืนยันการลบ? </v-card-title>
        <v-card-text> เมื่อยืนยันคุณจะไม่สามารถกู้คืนข้อมูลนี้ได้ </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="confirm = false"> cancel </v-btn>
          <v-btn color="green darken-1" text @click="submitDelete">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import DessertForm from "~/components/forms/DessertForm";

export default {
  components: { DessertForm },
  data() {
    return {
      search: "",
      snackbar: {
        show: false,
        text: "",
        type: "",
      },
      currentPK: null,
      confirm: false,
      headers: [
        { text: "ชื่อขนม", value: "des_name" },
        { text: "ชื่อร้าน", value: "des_store" },
        { text: "ราคา (บาท)", value: "des_price" },
        { text: "Actions", value: "action", sortable: false },
      ],
      desserts: [],
    };
  },
  mounted() {
    // show progress circular for loading
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
    });
    this.fetchData();
  },
  methods: {
    addItem() {
      this.$refs.DessertForm.open("add");
    },
    editItem(item) {
      this.currentPK = item.id;
      this.$refs.DessertForm.open("edit", item);
    },
    deleteItem(item) {
      this.currentPK = item.id;
      this.confirm = true;
    },
    async fetchData() {
      this.desserts = await this.$axios.$get("/api/desserts");
      // hide progress circular for loading
      this.$nextTick(() => {
        this.$nuxt.$loading.finish();
      });
    },
    async submitAdd(data) {
      try {
        // show progress circular for loading
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
        });
        const result = await this.$axios.$post("/api/desserts", data);
        if (result) {
          this.snackbar = {
            show: true,
            text: "Success",
            type: "success",
          };
          this.$refs.DessertForm.close();
          this.fetchData();
        }
      } catch (error) {
        this.snackbar = {
          show: true,
          text: "Fail",
          type: "error",
        };
      }
    },
    async submitEdit(data) {
      try {
        // show progress circular for loading
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
        });
        const result = await this.$axios.$put(
          `/api/desserts/${this.currentPK}`,
          data
        );
        if (result) {
          this.snackbar = {
            show: true,
            text: "Success",
            type: "success",
          };
          this.$refs.DessertForm.close();
          this.fetchData();
        }
      } catch (error) {
        this.snackbar = {
          show: true,
          text: "Fail",
          type: "error",
        };
      }
    },
    async submitDelete(data) {
      try {
        // show progress circular for loading
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
        });
        const result = await this.$axios.$delete(
          `/api/desserts/${this.currentPK}`
        );
        if (result) {
          this.snackbar = {
            show: true,
            text: "Success",
            type: "success",
          };
          this.confirm = false;
          this.fetchData();
        }
      } catch (error) {
        this.confirm = false;
        this.snackbar = {
          show: true,
          text: "Fail",
          type: "error",
        };
      }
    },
  },
};
</script>