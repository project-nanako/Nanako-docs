# 开发计划

Nanako 不使用传统的 ROS 2, 而是采用 [dora](https://dora-rs.ai) 作为基本框架.

作为开发者, 你仍然可以使用 C++, Python 进行开发, 但 Nanako 更推荐使用 Rust 作为主要的开发语言.

## Tasks

- 移植 webcam node

- 移植 hik-camera node

- 移植 opt-camera node

- 移植 [rm-vision](https://gitlab.com/rm_vision) 的 auto-aim 模块

  - armor_detector

  - armor_tracker

- 移植 [FYT2024_vision](https://github.com/CSU-FYT-Vision/FYT2024_vision) 的 rm_rune 模块

  - rune_detector

  - rune_solver

## Q&A

- Q1: 为什么不使用 ROS 2?

- A1: ROS 2 作为已经被广泛采用的 Robotic 框架. 确实拥有相对成熟的软件生态, 但也同时拥有以下缺点:

  - **强绑定 Ubuntu:** ROS2的软件包强绑定于 Ubuntu. 无论是 Debian 还是 RaspiOS, ROS2 都无法在 Ubuntu 以外的 Linux 发行版稳定运行, 或多或少都存在 bug.

  - **强绑定 C++和Python** 尽管有 rclrs, rclgo 等 ROS 2 绑定库, 但你仍然无法轻易的使用其它语言来写 ROS 2 Packages.

  - **高门槛:** ROS 2 的学习过程十分漫长而复杂, 考虑到 RoboMaster 作为学生竞赛, 零基础的 RoboMaster 视觉新人无法快速上手.

---

- Q2: 为什么推荐使用 Rust?

- A2: 本文档无意参与关于 Rust 与 C++ 哪个更好的争论, 但不可否认的是, Rust 和 C++ 都是非常优秀的语言, Rust 生态近几年也有了长足进步. 更重要的是, Nanako 的基本框架 dora 是使用 Rust 编写的