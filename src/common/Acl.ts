const registerAcl =
    (app: any) => {
        app.directive('acl', {
            mounted(el: any, binding: any) {
                el.style.display = 'none';
                //const rights = JSON.parse(localStorage.getItem("rights") || '[]' as string) || [];

                const rights = [];
                rights.forEach((element:string)=> {
                   if (element == binding.value) {
                       el.style.display = 'inline';
                       return;
                   } 
                });
            }
        });
    };

export default registerAcl;