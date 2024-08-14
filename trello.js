function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//------------------------------------------------------------

var cursorDot = document.querySelector("#cursor-dot")
var cursorLine = document.querySelector("#cursor-outline")


window.addEventListener("mousemove" , function(e){

    var posX = e.clientX
    var posY = e.clientY

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorLine.animate({
        left:`${posX}px`,
        top: `${posY}px`

    }, {duration: 500, fill : "forwards"})
});

//------------------------------------------------------------------------------

var inp = document.getElementsByClassName('inp')
var lists = document.getElementsByClassName('lists')

function addTodo() {
    if (inp.value.trim() !== "") {
        var li = document.createElement('li');
        li.innerHTML = `<input type="text" value="${inp.value}" disabled>
                        <div class="icons">
                            <i class="fas fa-edit" onclick="updt(event)"></i>
                            <i class="fas fa-trash" onclick="delt(event)"></i>
                        </div>`;
        lists.appendChild(li);
        inp.value = "";
    }
}

function clickTodo(event) {
    if (event.keyCode === 13) {
        addTodo();
    }
}

function delt(event) {
    event.target.closest('li').remove();
}

function updt(event) {
    var input = event.target.closest('li').querySelector('input[type="text"]');
    input.disabled = false;
    input.focus();
    input.onblur = function () {
        input.disabled = true;
    };
}

//------For delete all task
function deleteAll() {
    if (lists.children.length === 0) {
        swal("You have nothing to delete!");
    } else {
        swal({
            title: "Do you want to delete all?",
            icon: "warning",
            buttons: ["Cancel", "Delete"],
        }).then((willDelete) => {
            if (willDelete) {
                lists.innerHTML = ''; 
                swal("All items deleted successfully!", {
                    icon: "success",
                    buttons: "OK"
                });
            } else {
                swal("Deletion canceled!");
            }
        });
    }
}