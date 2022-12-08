from inertia import render


def home(request):
    return render(request, 'Home', props={
        'title': 'Django Inertia Vue.js',
        'description': 'Belajar melakukan instalasi dan setup Django, Inertia dan Vue.js'
    })
