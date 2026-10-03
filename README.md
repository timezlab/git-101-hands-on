# git101 · thư mục làm việc mẫu

Dùng cho buổi sharing **Git 101 Hands-on** (khối BF). Sản phẩm demo: trang *Từ điển chỉ tiêu* của Ngân hàng Demo, dữ liệu minh hoạ.

```bash
cd ~
git clone -b starter --single-branch https://github.com/timezlab/git-101-hands-on.git git101
cd git101
code .
rm -rf .git
```

Xoá `.git` để bỏ lịch sử của repo mẫu. File vẫn còn nguyên; anh/chị tự `git init` lại từ đầu trong `kpi-dictionary/`.

- `.vscode/settings.json`: cho VS Code hiện thư mục `.git` (mặc định bị ẩn)
- `kpi-dictionary/`: code trang web, sẽ thành repo của anh/chị
  - `index.html`: khung và nội dung trang (HTML)
  - `style.css`: giao diện: màu, cỡ chữ, bố cục (CSS)
  - `app.js`: hành vi: ô tìm kiếm lọc chỉ tiêu (JavaScript)
