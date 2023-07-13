document.addEventListener("DOMContentLoaded", function () {
  let courseId;
  const deleteForm = document.forms["delete-course-form"];
  const btnDeleteCourse = document.getElementById("btn-delete-course");
  const checkboxAll = $("#checkbox-all");
  const courseItemCheckbox = $("input[name='courseIds[]']");
  const submitAllBtn = $(".btn-submit-all");
  const containerForm = document.forms["container-form"];
  $("#delete-courese-modal").on("show.bs.modal", function (event) {
    let button = $(event.relatedTarget);
    courseId = button.data("id");
  });
  btnDeleteCourse.onclick = () => {
    deleteForm.action = "/courses/" + courseId + "?_method=DELETE";
    deleteForm.submit();
  };
  checkboxAll.change(function () {
    let isCheckedAll = $(this).prop("checked");
    courseItemCheckbox.prop("checked", isCheckedAll);
  });
  courseItemCheckbox.change(function () {
    let isCheckedAll =
      courseItemCheckbox.length ===
      $("input[name='courseIds[]']:checked").length;
    checkboxAll.prop("checked", isCheckedAll);
    renderCheckAllSubmitBtn();
  });
  function renderCheckAllSubmitBtn() {
    const checkedCount = $("input[name='courseIds[]']:checked").length;
    if (checkedCount) {
      submitAllBtn.removeClass("disabled");
    } else {
      submitAllBtn.addClass("disabled");
    }
  }

  submitAllBtn.on("submit", function (e) {
    let isSubmitable = !$(this).hasClass("disabled");
    if (!isSubmitable) {
      e.preventDefault();
    }
  });
});
