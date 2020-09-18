$(function() {
    //help page(tutorial online)
    $("#walkthrough-content").load("dblock-tutorial.inc");

    // Set up tour
    $('body').pagewalkthrough({
        name: 'introduction',
        steps: [
        { wrapper: '#title',popup: {content: '#walkthrough-0',type: 'modal',position: 'bottom' ,width: '400'}
        },{ popup: {content: '#walkthrough-1',type: 'modal' }
        }, {wrapper: '#title',popup: {content: '#walkthrough-2',type: 'tooltip',position: 'right',offsetVertical: 10}
        }, {wrapper:'#content_area',popup:{content: '#walkthrough-workspace',type: 'tooltip',position: 'top',offsetArrowVertical:-5,offsetArrowHorizontal: 300,offsetVertical:80,width: '400'}
        // #btnbar
        },{wrapper: 'h1.top_bar button',popup: {content: '#walkthrough-btnbar',type: 'tooltip',position: 'bottom',width:'400'}
        // }, {wrapper: 'a[href="http://download.com/files.rar"]', popup: {content: '#walkthrough-download',type: 'tooltip',position: 'bottom'}
        }, {wrapper: '#tabRow',popup: {content: '#walkthrough-5',type: 'tooltip',position: 'bottom',width:'450'}
        }, {wrapper:'#blocks_left_div',popup:{content: '#walkthrough-blocksleft',type: 'tooltip',position:'top'}
        }, {wrapper: '#footer',popup: {content: '#walkthrough-footer',type: 'tooltip',position: 'top',width:'400'}
        }, {popup: {content: '#walkthrough-goodbye',type: 'modal',width:'400'}
        }]
    });
    // Show the tour
    $('body').pagewalkthrough('show');
});
