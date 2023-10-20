variable "app_name" {
  type = string
  default = "cumbia_ninja"
}

variable "env" {
  type = string
  default = "QA"
}

variable "img" {
  type = string
  default = "nginx:1.26"
}

variable "img-backend" {
  type = string
  default = "nginx:1.26"
}