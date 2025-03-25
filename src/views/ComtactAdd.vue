<template>
  <div class="page">
    <h4>Thêm Liên hệ Mới</h4>
    <ContactForm :contact="initialContact" @submit:contact="addContact" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import ContactForm from "@/components/contactFormAdd.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      initialContact: {
        name: "",
        email: "",
        address: "",
        phone: "",
        favorite: false,
      },
      message: "",
    };
  },
  methods: {
    async addContact(data) {
      try {
        await ContactService.create(data);
        alert("Liên hệ được thêm thành công.");
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.log(error);
        this.message = "Đã xảy ra lỗi khi thêm liên hệ.";
      }
    },
  },
};
</script>

<style scoped>
.page {
  max-width: 400px;
  margin: auto;
}
</style>