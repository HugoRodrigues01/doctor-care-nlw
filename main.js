
// Adicionara os eventos na janela na pagina 
window.addEventListener("scroll", onScroll )

onScroll()

function onScroll() {

    showNavOnScroll()

    showButtonBackToTopOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {

    const targetLine = scrollY + innerHeight / 2

    // Verificando se a seção passou da linha
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachedOrPassedLine = targetLine >= sectionTop

    // Verificar se a base está a baixo da linha

    const sectionEndsAt = sectionTop + sectionHeight <= targetLine

    const sectionEndPassedTargetLine = sectionEndsAt

    const sectionBoundaries = sectionTopReachedOrPassedLine && !sectionEndPassedTargetLine

    const menuElement = document.querySelector(`nav#navigation.scroll .menu .options li a[href*=${section.getAttribute('id')}]`)

    
    console.log(sectionBoundaries)
    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
        console.log(menuElement)
    }
}

function showNavOnScroll() {

    if (scrollY > 0) {
        navigation.classList.add("scroll")

    } else {
        navigation.classList.remove("scroll")
    }
}

function showButtonBackToTopOnScroll() {

    if (scrollY > 500) {
        buttonBackToTop.classList.add("show")
    } else {
        buttonBackToTop.classList.remove("show")

    }
}

function openMenu() {

    document.body.classList.add("menu-expanded")
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}

const configReveal = {
    // onde ira se movimentar
    origin: "top",
    // distância inicial
    distance: '30px',
    // duração para mostrar
    duration: 900,
    // iniciar de novo todas as vezes
    // reset: true,
}

ScrollReveal(configReveal).reveal(`
#home,
#home img,
#services header,
#services .card,
#about,
#about header,
#about .content
`)