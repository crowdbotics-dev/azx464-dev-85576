import axios from "axios"
const azxdevAPI = axios.create({
  baseURL: "https://azx464-dev-85576.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return azxdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_znvfh_list(payload) {
  return azxdevAPI.get(`/api/v1/znvfh/`)
}
function api_v1_znvfh_create(payload) {
  return azxdevAPI.post(`/api/v1/znvfh/`, payload.data)
}
function api_v1_signup_create(payload) {
  return azxdevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return azxdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return azxdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return azxdevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return azxdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return azxdevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return azxdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return azxdevAPI.post(`/rest-auth/logout/`)
}
function api_v1_znvfh_retrieve(payload) {
  return azxdevAPI.get(`/api/v1/znvfh/${payload.id}/`)
}
function api_v1_znvfh_update(payload) {
  return azxdevAPI.put(`/api/v1/znvfh/${payload.id}/`, payload.data)
}
function api_v1_znvfh_partial_update(payload) {
  return azxdevAPI.patch(`/api/v1/znvfh/${payload.id}/`, payload.data)
}
function api_v1_znvfh_destroy(payload) {
  return azxdevAPI.delete(`/api/v1/znvfh/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return azxdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return azxdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return azxdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return azxdevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return azxdevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_znvfh_list,
  api_v1_znvfh_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_znvfh_retrieve,
  api_v1_znvfh_update,
  api_v1_znvfh_partial_update,
  api_v1_znvfh_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
