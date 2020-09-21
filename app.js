const timeAimation = 300

document.querySelectorAll('.spoiler').forEach($element => {
    $element.addEventListener('click', (e) => {
        try {
            let $item = e.target.closest('.spoiler__item')
            let $content = $item.querySelector('.spoiler__content')
            if ($item && e.target.matches('.spoiler__title')) {
                if ($element.classList.contains('one')) {
                    Array.from($element.children).forEach($e => {
                        if ($e != $item) {
                            $e.classList.remove('active')
                            let anims = $e.querySelector('.spoiler__content').getAnimations()
                            if (anims.length > 0) {
                                anims.forEach(a => {
                                    a.cancel()
                                })
                            }
                        }
                    })
                }

                let anims = $content.getAnimations()
                if (anims.length > 0) {
                    anims.forEach(a => {
                        a.cancel()
                    })
                }

                let heightBefore = $content.offsetHeight


                $item.classList.toggle('active')

                let heightAfter = $content.offsetHeight

                let anim = $content.animate([
                    { height: heightBefore + 'px' },
                    { height: heightAfter + 'px' }
                ], timeAimation)
                anim.onfinish = (e) => {

                }
            }
        } catch (e) { }
    })
})